# Feedback Collector

A full-stack MERN application for collecting user feedback. The frontend is built with **Next.js**, and the backend uses **Express.js** with **MongoDB Atlas** as the database.

---

## Project Structure

feedback-collector/
├── frontend/ # Next.js frontend
├── backend/ # Express.js backend
└── README.md

yaml
Copy code

---

## Environment Variables

### Frontend (`frontend/.env.local`)

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/feedback
Backend (backend/.env)
env
Copy code
# Server configuration
PORT=5000

# MongoDB Atlas connection string
MONGO_URI=mongodb+srv://latheeshan888_db_user:5HglZsxygFwxKldS@feedbacks.d3cteui.mongodb.net/?retryWrites=true&w=majority&appName=feedbacks
Note: Never commit .env or .env.local files to GitHub as they contain sensitive information.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/<your-username>/<repo>.git
cd feedback-collector
Install dependencies for both frontend and backend:

bash
Copy code
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
Running the Application
Backend
bash
Copy code
cd backend
npm run dev
The backend server will start on http://localhost:5000.

Frontend
bash
Copy code
cd frontend
npm run dev
The Next.js frontend will start on http://localhost:3000 by default.

Features
Submit feedback through a Next.js frontend form

Store feedback in MongoDB Atlas

Fully dynamic API built with Express.js

Tech Stack
Frontend: Next.js, React

Backend: Node.js, Express.js

Database: MongoDB Atlas

Environment Variables: .env.local for frontend, .env for backend

Package Manager: npm

