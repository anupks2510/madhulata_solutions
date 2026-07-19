"""create leads table

Revision ID: fcc47041ab19
Revises:
Create Date: 2026-07-07 02:19:50.214065

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision: str = "fcc47041ab19"
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Create leads table."""

    op.create_table(
        "leads",

        sa.Column(
            "id",
            sa.Integer(),
            primary_key=True,
            autoincrement=True,
        ),

        sa.Column(
            "name",
            sa.String(length=100),
            nullable=False,
        ),

        sa.Column(
            "email",
            sa.String(length=120),
            nullable=False,
        ),

        sa.Column(
            "phone",
            sa.String(length=20),
            nullable=True,
        ),

        sa.Column(
            "company",
            sa.String(length=120),
            nullable=True,
        ),

        sa.Column(
            "service",
            sa.String(length=120),
            nullable=True,
        ),

        sa.Column(
            "budget",
            sa.String(length=50),
            nullable=True,
        ),

        sa.Column(
            "problem",
            sa.Text(),
            nullable=True,
        ),

        sa.Column(
            "status",
            sa.String(length=30),
            nullable=False,
            server_default="NEW",
        ),

        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            server_default=sa.func.now(),
            nullable=False,
        ),
    )

    op.create_index(
        "ix_leads_email",
        "leads",
        ["email"],
        unique=False,
    )


def downgrade() -> None:
    """Drop leads table."""

    op.drop_index("ix_leads_email", table_name="leads")
    op.drop_table("leads")