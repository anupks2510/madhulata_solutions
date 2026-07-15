from langchain_core.prompts import ChatPromptTemplate

from app.ai.llm.chat_model import llm
from app.ai.retriever.retriever import retriever
from app.ai.prompts.company_prompt import SYSTEM_PROMPT


prompt = ChatPromptTemplate.from_messages(
    [
        ("system", SYSTEM_PROMPT),
        ("human", "{question}")
    ]
)


def ask(question: str):

    docs = retriever.invoke(question)

    context = "\n\n".join(
        doc.page_content
        for doc in docs
    )

    messages = prompt.invoke({
        "context": context,
        "question": question
    })

    response = llm.invoke(messages)

    # -------- Collect Sources --------

    sources = []

    seen = set()

    for doc in docs:

        source = doc.metadata.get("source", "")

        filename = source.split("\\")[-1]

        page = doc.metadata.get("page", 0) + 1

        key = (filename, page)

        if key not in seen:

            seen.add(key)

            sources.append({

                "file": filename,

                "page": page

            })

    return {

        "answer": response.content,

        "sources": sources

    }