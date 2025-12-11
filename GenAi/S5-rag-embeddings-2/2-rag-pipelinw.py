import os
from dotenv import load_dotenv
import google.generativeai as genai
import chromadb

load_dotenv()

# Configure Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Initialize ChromaDB
chroma_client = chromadb.Client()

# Create a vector collection
collection = chroma_client.create_collection(
    name="documentation",
    metadata={"description": "Product documentation embeddings"}
)

# ========== EMBEDDING FUNCTION ========== #
def get_embedding(text, model="models/text-embedding-004"):
    """
    Generate embedding using Gemini.
    """
    text = text.replace("\n", " ")

    res = genai.embed_content(
        model=model,
        content=text
    )

    return res["embedding"]


# ========== SEMANTIC SEARCH ========== #
def semantic_search(query, n_results=3):
    """
    Search vector database for documents similar to the query.
    """
    query_embedding = get_embedding(query)

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results
    )
    return results


# ========== DOCUMENTS ========== #
documents = [
    "To reset your password, go to Settings > Security > Change Password. Enter your current password and then your new password twice.",
    "You can update your email address in the Account section. Click on Profile, then Edit Email, and verify the change via the confirmation link.",
    "To delete your account, navigate to Settings > Privacy > Delete Account. This action is permanent and cannot be undone.",
    "Enable two-factor authentication in Security settings. You'll need a mobile app like Google Authenticator or Authy.",
    "Export your data by going to Settings > Data & Privacy > Download Data. Processing may take up to 48 hours.",
    "Change your username in Profile settings. Note that usernames must be unique and can only be changed once every 30 days.",
    "To recover a deleted item, check your Trash folder within 30 days. After 30 days, items are permanently removed.",
    "Manage notification preferences in Settings > Notifications. You can customize alerts for email, push, and SMS."
]

metadata = [
    {"category": "security", "topic": "password"},
    {"category": "account", "topic": "email"},
    {"category": "account", "topic": "deletion"},
    {"category": "security", "topic": "2fa"},
    {"category": "privacy", "topic": "data-export"},
    {"category": "account", "topic": "username"},
    {"category": "recovery", "topic": "trash"},
    {"category": "settings", "topic": "notifications"}
]


print("Generating embeddings and storing documents...")

embeddings = [get_embedding(doc) for doc in documents]

collection.add(
    embeddings=embeddings,
    documents=documents,
    metadatas=metadata,
    ids=[f"doc_{i}" for i in range(len(documents))]
)

print(f"✓ Stored {len(documents)} documents in vector database!")


# ========== RAG PIPELINE ========== #
def rag_query(user_question, n_results=3):
    """
    Complete RAG process using Gemini + ChromaDB.
    """

    print(f"\n🔍 Searching knowledge base for: '{user_question}'")

    # 1. Retrieve relevant documents
    results = semantic_search(user_question, n_results=n_results)

    context_docs = results["documents"][0]
    metadata_docs = results["metadatas"][0]

    context = "\n\n".join([
        f"Document {i+1}: {doc}"
        for i, doc in enumerate(context_docs)
    ])

    print(f"✓ Found {len(context_docs)} relevant documents")

    # 2. Build prompt
    system_prompt = """
You are a helpful assistant. Answer using ONLY the provided context.
If the answer is not in the context, say: 'I cannot find the answer in the documentation.'
"""

    user_prompt = f"""
Context:
{context}

Question: {user_question}

Answer:
"""

    # 3. Generate answer with Gemini
    print("🤖 Generating answer...")

    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(
        system_prompt + "\n" + user_prompt
    )

    answer = response.text

    return {
        "answer": answer,
        "sources": context_docs,
        "metadata": metadata_docs
    }


# ========== DEMO ========== #
print("\n" + "="*60)
print("COMPLETE GEMINI RAG SYSTEM DEMO")
print("="*60)

test_question = "What should I do if I accidentally deleted something important?"

result = rag_query(test_question)

print("\n" + "-"*60)
print(f"Question: {test_question}")
print("-"*60)

print(f"\nAnswer:\n{result['answer']}")

print("\n📚 Sources used:")
for i, (source, meta) in enumerate(zip(result["sources"], result["metadata"]), 1):
    print(f"\n{i}. [{meta['category']}] {source[:200]}...")
