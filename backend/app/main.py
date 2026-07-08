from fastapi import FastAPI

from app.db.database import engine
from app.db.base import Base

import app.models.lead
from app.routers.leads import router as lead_router
# Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Madhulata Solutions API",
    description="Backend API for AI Consultancy Platform",
    version="1.0.0"
)

app.include_router(lead_router)

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










