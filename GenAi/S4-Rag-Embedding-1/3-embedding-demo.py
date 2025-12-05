"""
Understanding Embeddings: Basic Operations (Gemini Version)
This demo shows how to generate and inspect embeddings using Google Gemini
"""

import numpy as np
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# Configure Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def get_embedding(text, model="models/text-embedding-004"):
    """
    Generate embedding for text using Gemini API
    
    Args:
        text: Input text string
        model: Gemini embedding model to use
    
    Returns:
        List of floats (embedding vector)
    """
    # Clean text
    text = text.replace("\n", " ").strip()

    # Generate embedding
    result = genai.embed_content(
        model=model,
        content=text
    )

    embedding = result["embedding"]
    return embedding


# Demo
if __name__ == "__main__":
    print("="*70)
    print("DEMO 1: What Does an Embedding Look Like?")
    print("="*70)
    
    sample_text = "I Love Cats."
    embedding = get_embedding(sample_text)
    
    print(f"\nOriginal Text:")
    print(f"  '{sample_text}'")
    
    print(f"\nEmbedding Properties:")
    print(f"  - Type: {type(embedding)}")
    print(f"  - Dimensions: {len(embedding)}")
    print(f"  - First 10 values: {embedding[:10]}")
    print(f"  - Data type: {type(embedding[0])}")
    
    # Calculate statistics
    embedding_array = np.array(embedding)
    print(f"\nStatistics:")
    print(f"  - Min value: {embedding_array.min():.4f}")
    print(f"  - Max value: {embedding_array.max():.4f}")
    print(f"  - Mean: {embedding_array.mean():.4f}")
    print(f"  - Std dev: {embedding_array.std():.4f}")
    print(f"  - Vector magnitude: {np.linalg.norm(embedding_array):.4f}")
