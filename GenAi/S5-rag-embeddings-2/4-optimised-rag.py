import os
from dotenv import load_dotenv
import google.generativeai as genai
import chromadb

load_dotenv()

# ---------------- GEMINI SETUP ---------------- #
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# ---------------- CHROMA DB INIT ---------------- #
chroma_client = chromadb.Client()

collection = chroma_client.create_collection(
    name="documentation",
    metadata={"description": "Product documentation embeddings"}
)

# ---------------- EMBEDDING FUNCTION ---------------- #
def get_embedding(text, model="models/text-embedding-004"):
    """Generate Gemini embedding for a piece of text."""
    text = text.replace("\n", " ")

    res = genai.embed_content(
        model=model,
        content=text
    )

    return res["embedding"]


# ---------------- BASIC SEMANTIC SEARCH ---------------- #
def semantic_search(query, n_results=3):
    query_embedding = get_embedding(query)

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results
    )

    return results


# ---------------- SAMPLE DOCUMENTS ---------------- #
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


# ---------------- OPTIMIZED RAG ---------------- #
def optimized_rag(user_question: str, max_context_tokens: int = 2000):
    """
    RAG with Gemini + context-window optimization.
    Retrieves top docs, then selects as many as fit in token budget.
    """
    results = semantic_search(user_question, n_results=10)

    # Rank by similarity (distance)
    ranked_docs = sorted(
        zip(results['documents'][0], results['distances'][0]),
        key=lambda x: x[1]  # lower distance = better
    )

    selected_docs = []
    total_tokens = 0

    for doc, distance in ranked_docs:
        approx_tokens = len(doc) // 4  # ~1 token per 4 chars

        if total_tokens + approx_tokens <= max_context_tokens:
            selected_docs.append({
                "text": doc,
                "similarity": 1 - distance
            })
            total_tokens += approx_tokens
        else:
            break

    print(f"\n📊 Retrieved {len(ranked_docs)} candidates")
    print(f"✂️  Selected {len(selected_docs)} docs ({total_tokens} tokens)\n")

    # Build optimized context
    context = "\n\n".join([
        f"[Relevance: {d['similarity']:.2f}] {d['text']}"
        for d in selected_docs
    ])

    # ---------------- GENERATE ANSWER USING GEMINI ---------------- #
    model = genai.GenerativeModel("gemini-2.5-flash")

    prompt = f"""
You are a helpful assistant. Use ONLY the following context to answer.

Context:
{context}

Question: {user_question}

Answer:
"""

    response = model.generate_content(prompt)

    return response.text, selected_docs


# ---------------- DEMO ---------------- #
print("\n" + "="*60)
print("CONTEXT OPTIMIZATION DEMO (GEMINI)")
print("="*60)

answer, selected = optimized_rag("How can I manage my account security?", max_context_tokens=200)

print("\nSelected documents:")
for i, doc in enumerate(selected, 1):
    print(f"{i}. Similarity: {doc['similarity']:.3f}")
    print(f"   {doc['text'][:80]}...\n")

print("\nAnswer:")
print(answer)