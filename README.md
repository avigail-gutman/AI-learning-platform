# AI-Driven Learning Platform

A mini MVP for an AI-powered learning platform  
Tech stack: Node.js (Express), React, PostgreSQL, OpenAI API

---

## Technologies Used

- **Backend:** Node.js (Express), Sequelize ORM
- **Database:** PostgreSQL
- **Frontend:** React
- **AI Integration:** OpenAI GPT API (or Mock)
- **DevOps:** Docker Compose (for DB), dotenv, axios, cors

---

## Assumptions

- All code and APIs match the project requirements.
- The database can be run with Docker or installed locally.
- If Docker does not work, you can use a locally installed PostgreSQL.
- **Admin password:** `admin123`

---

## Sample .env File

### backend/.env.example
PORT=5000 DATABASE_URL=postgres://postgres:your_password@localhost:5432/ai_learning OPENAI_API_KEY=your_openai_api_key

### frontend/.env
REACT_APP_API_URL=http://localhost:5000/api


---

## Setup & Run Instructions

### 1. Start the Database (PostgreSQL)

#### a. With Docker (recommended):
docker-compose up -d


#### b. Without Docker (if you have issues):
- Install PostgreSQL locally ([Download here](https://www.postgresql.org/download/))
- Create a database named `ai_learning`
- Update the `DATABASE_URL` in the backend `.env` file accordingly

---

### 2. Install dependencies & run the backend
cd backend npm install 
npm run seed  # Initialize the database with sample data (run once) 
npm start


---

### 3. Install dependencies & run the frontend
cd ../frontend 
npm install 
npm start

---

### 4. Access the system

- API: `http://localhost:5000/api`
- Frontend: `http://localhost:3000`
- Admin login password: `admin123`

---

## Docker Issue

During development, I encountered a technical issue with Docker (WSL/container errors).  
Therefore, I added support for running PostgreSQL locally as well.  
The system works both ways—just update the `DATABASE_URL` environment variable as needed.

---

## Questions?

For any questions, contact:  
[a0548553713@gmail.com]

---