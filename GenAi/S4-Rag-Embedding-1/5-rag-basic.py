"""
Conceptual RAG System - Understanding the Flow (Gemini Version)

This demonstrates the CONCEPT without vector databases.
Next: Full implementation with vector DBs.
"""

import numpy as np
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# Configure API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def get_embedding(text, model="models/text-embedding-004"):
    """Generate embedding using Gemini API"""
    text = text.replace("\n", " ").strip()
    result = genai.embed_content(
        model=model,
        content=text
    )
    return result["embedding"]

def cosine_similarity(vec1, vec2):
    """Calculate cosine similarity"""
    vec1, vec2 = np.array(vec1), np.array(vec2)
    return np.dot(vec1, vec2) / (np.linalg.norm(vec1) * np.linalg.norm(vec2))

def generate_answer_with_llm(context, query):
    """
    Generate answer using Gemini model based on context
    """
    prompt = f"""Answer the question using ONLY the information in the provided context.

<context>
{context}
</context>

Question: {query}

Helpful Answer:"""

    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(prompt)
    return response.text


def simple_rag_query(query, documents, top_k=2):
    """
    Simple RAG: Query documents, build context, LLM answer
    """

    print(f"\n{'='*70}")
    print(f"QUERY: {query}")
    print(f"{'='*70}")

    # STEP 1: EMBED QUERY
    print("\n[Step 1] Embedding query...")
    query_embedding = get_embedding(query)
    print(f"✓ Query embedding created ({len(query_embedding)} dims)")

    # STEP 2: SEARCH
    print(f"\n[Step 2] Searching {len(documents)} docs...")
    similarities = []
    for doc in documents:
        emb = get_embedding(doc)
        sim = cosine_similarity(query_embedding, emb)
        similarities.append((doc, sim))

    # Rank results
    similarities.sort(key=lambda x: x[1], reverse=True)
    top_results = similarities[:top_k]

    print(f"✓ Top {top_k} relevant docs:")
    for i, (doc, score) in enumerate(top_results, 1):
        print(f"\n {i}. Score: {score:.4f}")
        print(f"    {doc[:85]}...")

    # STEP 3: CONTEXT BUILDING
    print("\n[Step 3] Building context...")
    context = "\n\n".join([doc for doc, _ in top_results])
    print("✓ Context built")

    # STEP 4: GENERATE FINAL ANSWER
    print("\n[Step 4] LLM generating answer...")
    answer = generate_answer_with_llm(context, query)
    print("✓ Answer generated")

    print(f"\n{'='*70}")
    print("ANSWER:")
    print(f"{'='*70}")
    print(answer)

    return answer


# Demo
if __name__ == "__main__":
    print("="*70)
    print("CONCEPTUAL RAG SYSTEM DEMO (GEMINI)")
    print("="*70)

    print("""
This demonstrates the RAG pipeline:
Query → Embed → Search → Retrieve → Generate

Note: Embeddings are generated on every query.
Next step: vector DB for performance!
    """)

    knowledge_base = [
        "Acme Corp offers 15 days of paid vacation annually. Employees must submit vacation requests at least 2 weeks in advance.",
        "Remote work policy: Employees can work from home up to 3 days per week with manager approval.",
        "Health insurance covers medical, dental, and vision. Employees contribute 20% of premiums.",
        "The equipment stipend is $500 per year for home office setup. Submit receipts to HR for reimbursement.",
        "Professional development budget: $1,000 annually for courses, conferences, or certifications."
    ]

    queries = [
        "How many vacation days do employees get?",
        "What's the remote work policy?",
        "Tell me about the equipment budget"
    ]

    for q in queries:
        simple_rag_query(q, knowledge_base, top_k=2)
        print("\n")
