import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

# Configure Gemini with API key
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Create a generative model
model = genai.GenerativeModel("gemini-flash-latest")

# Send the prompt
prompt = "Explain animals in 5 sentences."

response = model.generate_content(
    prompt,
    generation_config={
        "temperature": 0.2,
        "max_output_tokens": 1000
    }
)

# Print response
print("Response:", response)

# Print the stop reason
print("Stop reason:", response.candidates[0].finish_reason)

#print usage metadata
print("Usage metadata:", response.usage_metadata)

# Print the response text
print("Response text:", response.candidates[0].content.parts[0].text)

