# MERN Stack Project

This project is a full-stack web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It uses **Tailwind CSS** for styling and the **Vite** development server to run the frontend.

## Features
- **Frontend**: Developed using React and styled with Tailwind CSS for a modern, responsive UI.
- **Backend**: Built with Node.js and Express.js, integrated with MongoDB for database management.
- **Development Server**: Vite is used to run the development server for faster builds and hot-reloading.
- **MongoDB Integration**: MongoDB is connected using MongoDB Compass for database management.

## Requirements
Before running the project, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (with a running instance or use MongoDB Atlas)
- Vite for frontend development
- MongoDB Compass for managing the database

## Setup Instructions

### Backend Setup
1. Navigate to the **backend** directory:
    ```bash
    cd backend
    ```

2. Ensure your **.env** file is correctly configured with:
    - **MONGO_URI**: MongoDB connection string
    - **PORT**: Port number for the server (default is 5000)

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

    If everything is set up correctly, you should see:
    ```
    Server is running on port 5000
    MongoDB is Connected: localhost
    ```

### Frontend Setup
1. Navigate to the **frontend** directory:
    ```bash
    cd frontend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Run the frontend development server:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

### Backend
- **/models**: Mongoose models for MongoDB collections.
- **/routes**: API routes for handling client requests.
- **.env**: Environment variables for MongoDB connection and server configurations.
- **server.js**: The entry point for the backend application.

### Frontend
- **/src**: Contains React components and Tailwind CSS styles.
- **/components**: Reusable React components.
- **vite.config.js**: Vite configuration file.
