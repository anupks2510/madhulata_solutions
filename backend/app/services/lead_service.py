from sqlalchemy.orm import Session

from app.repositories.lead_repository import LeadRepository
from app.schemas.lead import LeadCreate


class LeadService:

    @staticmethod
    def create_lead(db: Session, lead: LeadCreate):

        return LeadRepository.create(db, lead)

    @staticmethod
    def get_all_leads(db: Session):

        return LeadRepository.get_all(db)

    @staticmethod
    def get_lead(db: Session, lead_id: int):

        return LeadRepository.get_by_id(db, lead_id)