from app.ai.rag.loader import load_documents

docs = load_documents()

print("\n-------------------------------")
print(f"Total Pages Loaded: {len(docs)}")
print("-------------------------------\n")

print("First 500 characters:\n")

print(docs[0].page_content[:500])