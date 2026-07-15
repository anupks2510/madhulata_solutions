from pydantic import BaseModel
from app.schemas.lead import LeadResponse


class DashboardResponse(BaseModel):

    total_leads: int

    new_leads: int

    clients: int

    meetings: int

    recent_leads: list[LeadResponse]