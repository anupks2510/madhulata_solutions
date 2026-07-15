from app.ai.rag.loader import load_documents
from app.ai.rag.splitter import split_documents
from app.ai.vectorstore.chroma_db import vectorstore


def ingest():

    print("Deleting old embeddings...")

    vectorstore.delete_collection()

    print("Creating new collection...")

    docs = load_documents()

    chunks = split_documents(docs)

    vectorstore.add_documents(chunks)

    print()
    print("=" * 50)
    print(f"Inserted {len(chunks)} chunks")
    print("=" * 50)


if __name__ == "__main__":
    ingest()