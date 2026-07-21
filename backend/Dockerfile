# =========================================================
# Madhulata Solutions - FastAPI Backend
# =========================================================

# Use official lightweight Python image
FROM python:3.11-slim

# Prevent Python from writing .pyc files
ENV PYTHONDONTWRITEBYTECODE=1

# Ensure Python logs are shown immediately
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app


# ---------------------------------------------------------
# Install system dependencies
# ---------------------------------------------------------

RUN apt-get update && apt-get install -y \
    build-essential \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*


# ---------------------------------------------------------
# Install Python dependencies
# ---------------------------------------------------------

# Copy requirements first for better Docker layer caching
COPY requirements.txt .

RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt


# ---------------------------------------------------------
# Copy application
# ---------------------------------------------------------

COPY . .


# ---------------------------------------------------------
# Application port
# ---------------------------------------------------------

EXPOSE 8000


# ---------------------------------------------------------
# Start FastAPI
#
# Local Docker:
# PORT is not set -> defaults to 8000
#
# Render:
# Uses the PORT environment variable provided by Render
# ---------------------------------------------------------

CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}"]