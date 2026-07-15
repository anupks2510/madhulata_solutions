from pydantic import BaseModel


class Source(BaseModel):

    file: str

    page: int


class ChatRequest(BaseModel):

    message: str


class ChatResponse(BaseModel):

    answer: str

    sources: list[Source]