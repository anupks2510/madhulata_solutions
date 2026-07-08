from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "Madhulata Solutions"

    POSTGRES_HOST: str
    POSTGRES_PORT: int
    POSTGRES_DB: str
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str

    class Config:
        env_file = ".env"


settings = Settings()