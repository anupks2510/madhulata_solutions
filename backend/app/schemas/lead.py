from datetime import datetime
from typing import Optional

from pydantic import BaseModel, EmailStr


class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    service: Optional[str] = None
    budget: Optional[str] = None
    problem: Optional[str] = None


class LeadUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    company: Optional[str] = None
    service: Optional[str] = None
    budget: Optional[str] = None
    problem: Optional[str] = None
    status: Optional[str] = None


class LeadResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone: Optional[str]
    company: Optional[str]
    service: Optional[str]
    budget: Optional[str]
    problem: Optional[str]
    status: str
    created_at: datetime

    model_config = {
        "from_attributes": True
    }