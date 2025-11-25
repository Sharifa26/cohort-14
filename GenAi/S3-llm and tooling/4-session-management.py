import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# Configure Gemini API
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Use any chat-capable model
model = genai.GenerativeModel("gemini-2.5-flash")

# Conversation history as Gemini expects it
conversation_history = [
    {"role": "user", "parts": ["You are a helpful assistant. Reply in 1–2 sentences only. Be concise."]}
]


def chat(user_message):
    """Send user message, maintain history, and get model response."""
    
    # Add user message in Gemini format
    conversation_history.append({"role": "user", "parts": [user_message]})

    # Generate response with full history
    response = model.generate_content(
        conversation_history
    )

    # Extract assistant message as text
    assistant_text = response.text

    # Store in history (Gemini format)
    conversation_history.append({"role": "model", "parts": [assistant_text]})

    return assistant_text


# ---- Multi-Turn Conversation ----
print("User: What is 15 * 23?")
print("Assistant:", chat("What is 15 * 23?"), "\n")

print("User: Now add 100 to that.")
print("Assistant:", chat("Now add 100 to that."), "\n")

print("User: What was my first question?")
print("Assistant:", chat("What was my first question?"), "\n")


# Print full conversation
print("\nFull conversation history:", len(conversation_history), "messages")
for msg in conversation_history:
    print(msg)
