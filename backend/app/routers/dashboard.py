from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db

from app.services.dashboard_service import DashboardService
from app.schemas.dashboard import DashboardResponse


router = APIRouter(
    prefix="/api/v1/dashboard",
    tags=["Dashboard"]
)


@router.get(
    "/stats",
    response_model=DashboardResponse
)
def dashboard_stats(db: Session = Depends(get_db)):
    return DashboardService.get_stats(db)