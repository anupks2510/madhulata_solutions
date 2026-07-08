from fastapi import FastAPI

from app.database import engine
from app.models import Base

import app.models.lead
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Madhulata Solutions API",
    description="Backend API for AI Consultancy Platform",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Welcome to Madhulata Solutions API 🚀"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }










