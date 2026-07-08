from sqlalchemy.orm import Session

from app.models.lead import Lead
from app.schemas.lead import LeadCreate


class LeadRepository:

    @staticmethod
    def create(db: Session, lead: LeadCreate):

        db_lead = Lead(
            name=lead.name,
            email=lead.email,
            phone=lead.phone,
            company=lead.company,
            service=lead.service,
            budget=lead.budget,
            problem=lead.problem
        )

        db.add(db_lead)
        db.commit()
        db.refresh(db_lead)

        return db_lead