from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "Madhulata Solutions"

    # ---------------------------------------------------------
    # Production database
    # ---------------------------------------------------------
    # Render will provide this as the Neon pooled connection URL.
    # Locally this can remain unset.
    DATABASE_URL: str | None = None

    # Used for Alembic migrations against Neon.
    # Locally this can remain unset.
    DIRECT_DATABASE_URL: str | None = None

    # ---------------------------------------------------------
    # Local Docker PostgreSQL
    # ---------------------------------------------------------
    POSTGRES_HOST: str = "postgres"
    POSTGRES_PORT: int = 5432
    POSTGRES_DB: str = "madhulata_db"
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = ""

    # ---------------------------------------------------------
    # n8n
    # ---------------------------------------------------------
    N8N_WEBHOOK_URL: str | None = None

    # ---------------------------------------------------------
    # AI
    # ---------------------------------------------------------
    OPENAI_API_KEY: str | None = None
    GOOGLE_API_KEY: str | None = None

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


settings = Settings()