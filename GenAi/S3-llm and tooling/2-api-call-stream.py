import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-flash-latest")


def stream_gemini(prompt):
    print("Assistant:")

    # streaming call
    stream = model.generate_content(
        prompt,
        stream=True,
    )
    # print the first response
    # print(stream)

    full = ""
    for chunk in stream:
        # each chunk contains parts (tokens or text fragments)
        if chunk.text:
            print(chunk.text, end="", flush=True)
            full += chunk.text

    print("\n")
    return full

stream_gemini("Write a India with emojies.")
