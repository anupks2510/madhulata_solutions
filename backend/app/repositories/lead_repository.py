from sqlalchemy.orm import Session

from app.models.lead import Lead
from app.schemas.lead import LeadCreate, LeadUpdate
from app.services.n8n_service import send_new_lead

class LeadRepository:

    @staticmethod
    @staticmethod
    def create(db: Session, lead: LeadCreate):

        db_lead = Lead(
            name=lead.name,
            email=lead.email,
            phone=lead.phone,
            company=lead.company,
            service=lead.service,
            budget=lead.budget,
            problem=lead.problem,
        )

        db.add(db_lead)

        db.commit()

        db.refresh(db_lead)

        # Trigger n8n automation
        send_new_lead(db_lead)

        return db_lead

    @staticmethod
    def get_all(db: Session):
        return db.query(Lead).all()

    @staticmethod
    def get_by_id(db: Session, lead_id: int):
        return db.query(Lead).filter(Lead.id == lead_id).first()

    @staticmethod
    def update(db: Session, lead_id: int, lead: LeadUpdate):

        db_lead = db.query(Lead).filter(
            Lead.id == lead_id
        ).first()

        if not db_lead:
            return None

        update_data = lead.model_dump(exclude_unset=True)

        for key, value in update_data.items():
            setattr(db_lead, key, value)

        db.commit()
        db.refresh(db_lead)

        return db_lead

    @staticmethod
    def delete(db: Session, lead_id: int):

        db_lead = db.query(Lead).filter(
            Lead.id == lead_id
        ).first()

        if not db_lead:
            return None

        db.delete(db_lead)
        db.commit()

        return True