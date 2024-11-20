# Todo List BE

A simple REST API for managing todo items with user authentication, built using Node.js, ExpressJS, Mongoose, MongoDB, and TypeScript.

## Features
- User Signup and Login with JWT-based Authentication
- CRUD Operations for Todo Items
- Automated CRON Job to Mark Expired Todos as Completed

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list-api.git
   cd todo-list-api

2. Install dependencies

   npm install

3. Create a .env file in the root directory and add the following
    
    - MONGO_URI=your_mongodb_connection_string
    - JWT_SECRET=your_secret_key
    - PORT=5000   

4. Start the server in development mode:

    npm start

## API Endpoints
1. POST /api/auth/signup - Register a new user
2. POST /api/auth/login - Login and receive a token
3. POST /api/todos - Create a todo (Requires token)
4. GET /api/todos - Fetch all todos (Requires token)
5. GET /api/todos/:id - Fetch a specific todo (Requires token)
6. PUT /api/todos/:id - Update a todo (Requires token)
7. DELETE /api/todos/:id - Delete a todo (Requires token)

## CRON Job
The CRON job runs daily at midnight to automatically mark todos with expired due dates as completed.

## Postman Collection

Please find file Todo list.postman_collection.json on root folder