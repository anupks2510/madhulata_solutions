from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    service: Optional[str] = None
    budget: Optional[str] = None
    problem: Optional[str] = None


class LeadResponse(LeadCreate):
    id: int
    status: str
    created_at: datetime

    model_config = {
        "from_attributes": True
    }