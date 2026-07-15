from app.ai.rag.loader import load_documents
from app.ai.rag.splitter import split_documents

docs = load_documents()

chunks = split_documents(docs)

print("=" * 60)

print(f"Pages Loaded : {len(docs)}")

print(f"Chunks Created : {len(chunks)}")

print("=" * 60)

print()

print("First Chunk:\n")

print(chunks[0].page_content)

print()

print("=" * 60)

print("Chunk Metadata:")

print(chunks[0].metadata)
