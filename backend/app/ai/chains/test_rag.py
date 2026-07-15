from app.ai.chains.rag_chain import ask


while True:

    question = input("\nAsk: ")

    if question.lower() == "exit":
        break

    answer = ask(question)

    print()

    print("=" * 70)

    print(answer)

    print("=" * 70)