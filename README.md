# 🏛️ Latin Word of the Day — Back-End

Welcome to **LatinWordOfTheDayBE** – the back-end service powering the daily delivery of carefully selected Latin words. Designed for reliability and clarity, this project exposes an API for retrieving, managing, and scheduling Latin vocabulary, complete with definitions and example usage.

## 🚀 Features

- 🔤 Returns a new Latin word daily
- 📚 Includes definition, part of speech, and example sentence
- 📅 Supports scheduling and caching
- 🛠️ RESTful API endpoints
- 🧪 Unit and integration tested

## 🧰 Tech Stack

- **Node.js** / **Express**
- **PostgreSQL 16** (Docker container)
- **Jest** for testing
- **Docker Compose** for orchestration

## 📦 Installation

```bash
git clone https://github.com/ryanradder11/latinWordOfTheDayBE.git
cd latinWordOfTheDayBE
npm install
```

## 🖥️ Local Development

```bash
npm run dev     # Starts PostgreSQL container + Express server with nodemon
npm test        # Run Jest tests
```

The `dev` script:
1. Starts a PostgreSQL 16 container via `docker compose up db -d`
2. Reads the DB password from `db/password.txt`
3. Starts the Express server with nodemon (auto-reload) and debug inspector on port 9229

**Requires Docker** to be running for the PostgreSQL container.

## 🚀 Deployment

The full stack (frontend + backend + database) is orchestrated via `compose.yaml` in this repo.

### Deploy steps

**Backend changes only:**

1. Merge your PR to `main` on GitHub
2. SSH into the server and pull + rebuild:
   ```bash
   ssh latin
   cd /root/latinWordOfTheDayBE
   git pull origin main
   docker compose up -d --build server
   ```

**Frontend changes only:**

1. Merge your PR to `main` on the [UI repo](https://github.com/ryanradder11/LatinWordOfTheDayUI)
2. SSH into the server, pull the UI code, and rebuild the web container:
   ```bash
   ssh latin
   cd /root/LatinWordOfTheDayUI && git pull origin main
   cd /root/latinWordOfTheDayBE && docker compose up -d --build web
   ```

**Full stack redeploy:**

```bash
ssh latin
cd /root/LatinWordOfTheDayUI && git pull origin main
cd /root/latinWordOfTheDayBE && git pull origin main
docker compose up -d --build
```

### Server layout

| Path on server | Purpose |
|---|---|
| `/root/latinWordOfTheDayBE` | This repo — backend + Docker Compose orchestration |
| `/root/LatinWordOfTheDayUI` | Front-end Angular app |

### Docker services

| Service | Image | Ports |
|---|---|---|
| `db` | `postgres:16` | 5432 |
| `server` | Built from this repo | 3000 |
| `web` | Built from UI repo (Apache httpd 2.4) | 80, 443 |

The frontend build context is configured via `FE_BUILD_CONTEXT` in `.env` (defaults to `../latinWordOfTheDay/latinWordOfTheDay`).

### Generating new words

New words and images are generated using the [latin-word-generator](https://github.com/ryanradder11/latin-word-generator) script.

```bash
# 1. Start the local backend
npm run dev

# 2. Generate words locally (in the generator repo)
cd ../generate-words
python generate_words.py generate --count 10

# 3. Deploy to production
python generate_words.py deploy
```

The `deploy` command copies images to the server via SCP and uploads new words to the production API (port 3000). See the [generator README](https://github.com/ryanradder11/latin-word-generator#readme) for full details.

### Production URL

https://latinwordoftheday.com
