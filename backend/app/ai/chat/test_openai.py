from app.ai.chat.chat_model import llm

response = llm.invoke("Hello!")

print(response.content)