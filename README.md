# Telegram AI Agent

An AI-powered Telegram agent that collects messages, provides summaries, and offers a management dashboard.

## Features

- Telegram Integration (using Telethon)
  - Join groups as a real user
  - Monitor and collect messages
  - Weekly message collection

- AI Summarization
  - Process messages using Gemini 2.0 Flash
  - Store summaries in PostgreSQL

- User Dashboard
  - View message summaries
  - Manage AI agents
  - Launch agents to specific accounts

## Tech Stack

### Backend
- Django & Django REST Framework
- Telethon (Telegram client)
- Celery + Redis (task scheduling)
- PostgreSQL (database)
- Gemini 2.0 Flash (AI model)

### Frontend
- Next.js (React + TypeScript)
- Chakra UI / Tailwind CSS

### Deployment
- Dockerized deployment on VPS
- PostgreSQL for database
- Redis for message queue

## Project Structure

```
├── backend/               # Django backend
│   ├── api/              # REST API endpoints
│   ├── core/             # Core functionality
│   ├── telegram/         # Telegram integration
│   └── summarization/    # AI summarization logic
├── frontend/             # Next.js frontend
│   ├── components/       # React components
│   ├── pages/           # Next.js pages
│   └── styles/          # CSS styles
└── docker/              # Docker configuration
```

## Setup Instructions

1. Clone the repository
2. Set up environment variables
3. Run with Docker Compose

```bash
docker-compose up --build
```

## Development

### Backend
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## License

MIT