from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.database import engine
from app.db.base import Base

import app.models.lead

from app.routers.leads import router as lead_router
from app.routers.dashboard import router as dashboard_router
from app.routers.chat import router as chat_router

# Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Madhulata Solutions API",
    description="Backend API for AI Consultancy Platform",
    version="1.0.0"
)

origins = [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(lead_router)
app.include_router(dashboard_router)   # 👈 ADD THIS LINE

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
app.include_router(chat_router)