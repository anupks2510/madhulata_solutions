from app.ai.vectorstore.chroma_db import vectorstore

retriever = vectorstore.as_retriever(
    search_type="similarity",
    search_kwargs={"k": 5}
)