from pathlib import Path
from langchain_community.document_loaders import PyPDFLoader

# Path to company documents
DATA_DIR = Path(__file__).parent.parent / "data" / "company_docs"


def load_documents():
    documents = []

    pdf_files = list(DATA_DIR.glob("*.pdf"))

    print(f"\nFound {len(pdf_files)} PDF(s)\n")

    for pdf in pdf_files:
        print(f"Loading: {pdf.name}")

        loader = PyPDFLoader(str(pdf))

        documents.extend(loader.load())

    return documents