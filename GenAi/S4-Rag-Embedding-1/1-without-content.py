import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def ask_without_context(question):
    """Ask Gemini WITHOUT any conversation history."""
    print("\n" + "="*60)
    print("WITHOUT CONTEXT:")
    print("="*60)

    model = genai.GenerativeModel("gemini-2.5-flash")

    response = model.generate_content(
        question,
        generation_config={"max_output_tokens": 1000}
    )

    # Print the response
    #print(response)

    answer = response.candidates[0].content.parts[0].text

    print(f"\nQ: {question}")
    print(f"A: {answer}")

    return answer


# Demo questions about fictional company data
questions = [
    "What is Acme Corp's policy on remote work?",
    "How many vacation days do Acme Corp employees get?",
    "What is the equipment stipend for Acme Corp remote workers?"
]

if __name__ == "__main__":
    print("DEMONSTRATION: LLM KNOWLEDGE LIMITATIONS")
    print("="*60)
    print("Asking about fictional company 'Acme Corp'...\n")

    for q in questions:
        ask_without_context(q)
