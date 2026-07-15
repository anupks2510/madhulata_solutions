from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.lead import Lead


class DashboardService:

    @staticmethod
    def get_stats(db: Session):

        total = db.query(func.count(Lead.id)).scalar()

        new = (
            db.query(func.count(Lead.id))
            .filter(Lead.status == "NEW")
            .scalar()
        )

        clients = (
            db.query(func.count(Lead.id))
            .filter(Lead.status == "CLIENT")
            .scalar()
        )

        meetings = 0

        recent_leads = (
            db.query(Lead)
            .order_by(Lead.created_at.desc())
            .limit(5)
            .all()
        )

        return {

            "total_leads": total,

            "new_leads": new,

            "clients": clients,

            "meetings": meetings,

            "recent_leads": recent_leads

        }