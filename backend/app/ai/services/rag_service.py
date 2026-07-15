from app.ai.chains.rag_chain import ask


class RAGService:

    @staticmethod
    def chat(message: str):
        return ask(message)