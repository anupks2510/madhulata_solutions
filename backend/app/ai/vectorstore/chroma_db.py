from pathlib import Path

from langchain_chroma import Chroma

from app.ai.embeddings.openai_embeddings import embeddings

CHROMA_PATH = Path("chroma_db")

vectorstore = Chroma(
    persist_directory=str(CHROMA_PATH),
    embedding_function=embeddings
)