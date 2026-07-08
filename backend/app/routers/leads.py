from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.lead import LeadCreate, LeadResponse
from app.services.lead_service import LeadService
from app.schemas.lead import (
    LeadCreate,
    LeadResponse,
    LeadUpdate,
)
router = APIRouter(
    prefix="/api/v1/leads",
    tags=["Leads"],
)


@router.post("/", response_model=LeadResponse)
def create_lead(
    lead: LeadCreate,
    db: Session = Depends(get_db)
):
    return LeadService.create_lead(db, lead)


@router.get("/", response_model=list[LeadResponse])
def get_leads(
    db: Session = Depends(get_db)
):
    return LeadService.get_all_leads(db)


@router.get("/{lead_id}", response_model=LeadResponse)
def get_lead(
    lead_id: int,
    db: Session = Depends(get_db)
):

    lead = LeadService.get_lead(db, lead_id)

    if not lead:
        raise HTTPException(
            status_code=404,
            detail="Lead not found",
        )

    return lead
@router.put("/{lead_id}", response_model=LeadResponse)
def update_lead(
    lead_id: int,
    lead: LeadUpdate,
    db: Session = Depends(get_db),
):

    updated = LeadService.update_lead(
        db,
        lead_id,
        lead,
    )

    if not updated:
        raise HTTPException(
            status_code=404,
            detail="Lead not found",
        )

    return updated
@router.delete("/{lead_id}")
def delete_lead(
    lead_id: int,
    db: Session = Depends(get_db),
):

    deleted = LeadService.delete_lead(
        db,
        lead_id,
    )

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Lead not found",
        )

    return {
        "message": "Lead deleted successfully"
    }