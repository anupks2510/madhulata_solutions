from app.ai.retriever.retriever import retriever

question = "What is Madhulata Solutions AI Ethics Policy?"

docs = retriever.invoke(question)

print()

print("="*60)

print(f"Retrieved {len(docs)} documents")

print("="*60)

print()

for i, doc in enumerate(docs, start=1):

    print(f"Document {i}")

    print(doc.metadata)

    print()

    print(doc.page_content[:300])

    print()

    print("-"*60)