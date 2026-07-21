from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import DeclarativeBase

from app.core.config import settings


# ---------------------------------------------------------
# Database URL selection
# ---------------------------------------------------------
# Production:
# If DATABASE_URL exists, use it.
# Render will provide the Neon pooled connection URL.
#
# Local development:
# If DATABASE_URL is not set, construct the connection
# using the existing Docker PostgreSQL configuration.
# ---------------------------------------------------------

if settings.DATABASE_URL:
    DATABASE_URL = settings.DATABASE_URL
else:
    DATABASE_URL = (
        f"postgresql+psycopg2://{settings.POSTGRES_USER}:"
        f"{settings.POSTGRES_PASSWORD}@"
        f"{settings.POSTGRES_HOST}:"
        f"{settings.POSTGRES_PORT}/"
        f"{settings.POSTGRES_DB}"
    )


# ---------------------------------------------------------
# SQLAlchemy Engine
# ---------------------------------------------------------

engine = create_engine(
    DATABASE_URL,

    # Checks whether an existing pooled connection is still
    # alive before SQLAlchemy uses it.
    pool_pre_ping=True,

    # Avoid verbose SQL logging in production.
    echo=False,
)


# ---------------------------------------------------------
# Database Session
# ---------------------------------------------------------

SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
)


# ---------------------------------------------------------
# SQLAlchemy Base
# ---------------------------------------------------------

class Base(DeclarativeBase):
    pass


# ---------------------------------------------------------
# FastAPI Database Dependency
# ---------------------------------------------------------

def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()