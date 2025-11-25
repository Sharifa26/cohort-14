import json
import os
from dotenv import load_dotenv
import google.generativeai as genai 

load_dotenv()

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# --------------------------
# Step 1: Define tools
# --------------------------

tools = [
    {
        "name": "get_weather",
        "description": "Get current weather for a location",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {"type": "string"},
                "unit": {
                    "type": "string",
                    "enum": ["celsius", "fahrenheit"]
                }
            },
            "required": ["location"]
        }
    },
    {
        "name": "calculate",
        "description": "Perform mathematical calculations",
        "parameters": {
            "type": "object",
            "properties": {
                "expression": {"type": "string"}
            },
            "required": ["expression"]
        }
    }
]

# --------------------------
# Step 2: Implement functions
# --------------------------

def get_weather(location, unit="fahrenheit"):
    import random
    temp = random.randint(60, 85) if unit == "fahrenheit" else random.randint(15, 30)
    return {
        "location": location,
        "temperature": temp,
        "unit": unit,
        "conditions": random.choice(["sunny", "cloudy", "rainy"])
    }

def calculate(expression):
    try:
        allowed = set("0123456789+-*/(). ")
        if not all(c in allowed for c in expression):
            return {"error": "Invalid expression"}
        result = eval(expression)
        return {"expression": expression, "result": result}
    except Exception as e:
        return {"error": str(e)}

# Dispatcher
available_functions = {
    "get_weather": get_weather,
    "calculate": calculate
}

# --------------------------
# Step 3: Main Conversation Function
# --------------------------

def run_conversation(user_message):
    print(f"\nUser: {user_message}\n")

    model = genai.GenerativeModel(
        model_name="gemini-2.5-flash",
        tools=tools,
        generation_config={
        "response_mime_type": "application/json"   # Forces JSON output
    }
    )

    response = model.generate_content(
        user_message,
        tool_config={"allowed_tools": "auto"},
        generation_config={
        "response_mime_type": "application/json"   # Forces JSON output
    }
    )

    # If Gemini requested a tool call
    if response.candidates[0].content.parts[0].function_call:
        fc = response.candidates[0].content.parts[0].function_call
        fname = fc.name
        args = fc.args

        print(f"🔧 Model requested tool: {fname}")
        print(f"Arguments: {args}")

        # Call actual python function
        fn = available_functions[fname]
        result = fn(**args)
        print(f"Tool Result: {result}")

        # Second call with tool result
        final_response = model.generate_content(
            [
                user_message,
                {
                    "role": "tool",
                    "tool_name": fname,
                    "content": json.dumps(result)
                }
            ]
        )

        print("\nAssistant:", final_response.text)
        return final_response.text

    else:
        print("Assistant:", response.text)
        return response.text


# --------------------------
# DEMO CALLS
# --------------------------

print("="*70)
print("DEMO 1: Weather Query")
print("="*70)
run_conversation("What's the weather like in Seattle?")

# print("\n" + "="*70)
# print("DEMO 2: Math Query")
# print("="*70)
# run_conversation("What is 234 * 567?")

# print("\n" + "="*70)
# print("DEMO 3: No Tool Needed")
# print("="*70)
# run_conversation("What is the capital of France?")
