import os
from dotenv import load_dotenv
import google.generativeai as genai
import chromadb

load_dotenv()

# Configure Gemini with API key
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Initialize ChromaDB (local persistent DB)
chroma_client = chromadb.Client()

# Create a collection
collection = chroma_client.create_collection(
    name="documentation",
    metadata={"description": "Product documentation embeddings"}
)

print("✓ Vector database initialized with Gemini embeddings!")

# ---------------- EMBEDDING FUNCTION ---------------- #
def get_embedding(text, model="models/text-embedding-004"):
    """Generate embedding for a piece of text using Gemini."""
    text = text.replace("\n", " ")

    res = genai.embed_content(
        model=model,
        content=text
    )

    return res["embedding"]   # correct key


# Test embedding
sample_text = "How do I reset my password?"
embedding = get_embedding(sample_text)
print(f"Embedding dimension: {len(embedding)}")
print(f"First 5 values: {embedding[:5]}")

# ---------------- DOCUMENTS ---------------- #
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

# Generate and store embeddings
embeddings = [get_embedding(doc) for doc in documents]

collection.add(
    embeddings=embeddings,
    documents=documents,
    metadatas=metadata,
    ids=[f"doc_{i}" for i in range(len(documents))]
)

print(f"✓ Stored {len(documents)} documents in vector database!")

# ---------------- SEMANTIC SEARCH ---------------- #
def semantic_search(query, n_results=3):
    """Search relevant documents with Gemini and ChromaDB."""
    query_embedding = get_embedding(query)

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results
    )

    return results


# Test queries
test_queries = [
    "Do you now about Instagram?",
]

# print("\n" + "="*60)
# print("SEMANTIC SEARCH DEMO")
# print("="*60)

# for query in test_queries:
#     print(f"\n🔍 Query: '{query}'")
#     print("-" * 60)

#     results = semantic_search(query, n_results=3)

#     for i, (doc, meta, dist) in enumerate(zip(
#         results["documents"][0],
#         results["metadatas"][0],
#         results["distances"][0]
#     ), 1):
#         similarity = 1 - dist  # convert distance to similarity
#         print(f"\nResult {i} (similarity: {similarity:.3f}):")
#         print(f"Category: {meta['category']} | Topic: {meta['topic']}")
#         print(f"Content: {doc[:150]}...")



