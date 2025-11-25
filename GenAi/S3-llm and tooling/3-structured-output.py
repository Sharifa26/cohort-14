import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()


genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")

# Send the prompt
prompt = "Extract information in : John Smith is 30 years old and works as a software engineer in Seattle."

response = model.generate_content(
    prompt,
    generation_config={
        "response_mime_type": "application/json"   # Forces JSON output
    }
)

#print("Raw response:", response)

text = response.candidates[0].content.parts[0].text

try:
    data = json.loads(text)
    print("Parsed JSON:\n", json.dumps(data, indent=2))
except:
    print("⚠ Not valid JSON. Raw text:", text)