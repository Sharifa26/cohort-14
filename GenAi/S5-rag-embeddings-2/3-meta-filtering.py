import os
from dotenv import load_dotenv
import google.generativeai as genai
import chromadb

load_dotenv()

# Configure Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Initialize ChromaDB
chroma_client = chromadb.Client()

# Create a collection (like a table)
collection = chroma_client.create_collection(
    name="documentation",
    metadata={"description": "Product documentation embeddings"}
)

# ----------------------------------------------------
# EMBEDDING FUNCTION (GEMINI VERSION)
# ----------------------------------------------------
def get_embedding(text, model="models/text-embedding-004"):
    """Generate embedding using Gemini text-embedding model."""
    text = text.replace("\n", " ")

    res = genai.embed_content(
        model=model,
        content=text
    )

    return res["embedding"]


# ----------------------------------------------------
# BASIC SEMANTIC SEARCH
# ----------------------------------------------------
def semantic_search(query, n_results=3):
    """Search for documents semantically similar to the query."""
    query_embedding = get_embedding(query)

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results
    )
    
    return results


# ----------------------------------------------------
# FILTERED SEARCH (DYNAMIC META FILTERS)
# ----------------------------------------------------
def filtered_search(query: str, category: str = None, n_results: int = 3):
    """
    Search with optional metadata filtering.
    Example where filter:
    where = {"category": "security"}
    """
    query_embedding = get_embedding(query)

    where_filter = {"category": category} if category else None

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results,
        where=where_filter   # the same filtering API as OpenAI version
    )

    return results


# ----------------------------------------------------
# DOCUMENTS + METADATA
# ----------------------------------------------------
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


# ----------------------------------------------------
# DEMO
# ----------------------------------------------------
print("\n" + "="*60)
print("METADATA FILTERING DEMO (GEMINI)")
print("="*60)

query = "How do I change my settings?"

print(f"\n🔍 Query: '{query}'")

# 1️⃣ No filter
print("\n📋 Without filtering (searches everything):")
all_results = semantic_search(query, n_results=3)
for doc, meta in zip(all_results['documents'][0], all_results['metadatas'][0]):
    print(f"  - [{meta['category']}] {doc[:60]}...")

# 2️⃣ With filter
print("\n🔒 With filtering (only 'security' category):")
security_results = filtered_search(query, category="security", n_results=3)
for doc, meta in zip(security_results['documents'][0], security_results['metadatas'][0]):
    print(f"  - [{meta['category']}] {doc[:60]}...")

print("\n💡 Filtering helps narrow the search based on metadata!")
