from sqlalchemy.orm import Session

from app.repositories.lead_repository import LeadRepository
from app.schemas.lead import LeadCreate


class LeadService:

    @staticmethod
    def create_lead(db: Session, lead: LeadCreate):
        return LeadRepository.create(db, lead)