# Feedback Collector

A full-stack MERN application for collecting user feedback. The frontend is built with **Next.js**, and the backend uses **Express.js** with **MongoDB Atlas** as the database.

---

## Project Structure


frontend/ # Next.js frontend
backend/ # Express.js backend
README.md


---

## Environment Variables

### Frontend (`frontend/.env.local`)


NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/feedback



### Backend (`backend/.env.`)

# Server configuration
PORT=5000

# MongoDB Atlas connection string
MONGO_URI=mongodb+srv://latheeshan888_db_user:5HglZsxygFwxKldS@feedbacks.d3cteui.mongodb.net/?retryWrites=true&w=majority&appName=feedbacks


# Running the Application


Backend
cd backend
npm run dev
The backend server will start on http://localhost:5000


Frontend
cd frontend
npm run dev
The Next.js frontend will start on http://localhost:3000 by default.



# Tech Stack

Frontend: Next.js, React

Backend: Node.js, Express.js

Database: MongoDB Atlas

Environment Variables: .env.local for frontend, .env for backend

Package Manager: npm
