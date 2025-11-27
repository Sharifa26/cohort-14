import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Our "knowledge base"
COMPANY_POLICY = """
Acme Corp Remote Work Policy (Updated 2024):
- Employees can work remotely up to 3 days per week.
- Remote work must be approved by direct managers in advance.
- All employees must attend in-person meetings on Wednesdays.
- Remote workers must be available during core hours: 10 AM - 3 PM EST.
- Equipment stipend: $500 annually for home office setup.
"""


def ask_with_context(question, context):
    """Ask the Gemini model WITH context"""

    print("\n" + "="*60)
    print("WITH CONTEXT PROVIDED:")
    print("="*60)

    prompt = f"""
Here is some context information:

<context>
{context}
</context>

Based ONLY on the context above, answer this question: {question}

If the answer is not in the context, reply with:
"I don't have that information in the provided context."
"""

    # Create model
    model = genai.GenerativeModel("gemini-2.5-flash")

    # Send prompt
    response = model.generate_content(prompt)

    # Extract text EXACTLY how you requested
    answer = response.candidates[0].content.parts[0].text

    print(f"\nQ: {question}")
    print(f"A: {answer}")

    return answer


# ------------------------------------
# DEMO
# ------------------------------------
if __name__ == "__main__":
    print("DEMONSTRATION: The Power of Context")
    print("="*60)

    questions = [
        "How many days per week can I work remotely at Acme Corp?",
        "What day must I come to the office?",
        "What's the equipment budget?",
        "What's the dress code?"  # Not in context
    ]

    for q in questions:
        ask_with_context(q, COMPANY_POLICY)
