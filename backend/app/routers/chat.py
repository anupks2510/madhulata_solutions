from fastapi import APIRouter

from app.schemas.chat import ChatRequest, ChatResponse
from app.ai.services.rag_service import RAGService

router = APIRouter(
    prefix="/api/v1/ai",
    tags=["AI Chat"]
)


@router.post(
    "/chat",
    response_model=ChatResponse
)
def chat(request: ChatRequest):

    result = RAGService.chat(request.message)

    return ChatResponse(

        answer=result["answer"],

        sources=result["sources"]

    )