# Note-Taking API

This is a simple note-taking API built with Node.js, Express, and TypeScript. It allows users to create, retrieve, update, and delete notes.

## Features

🔹 User Authentication – Secure registration & login using JWT
🔹 Password Security – User passwords are hashed using bcrypt
🔹 Private Notes – Users can only access their own notes
🔹 CRUD Operations – Create, Read, Update, and Delete notes
🔹 Error Handling – Typed custom error classes for better debugging

## Technologies Used

- Node.js – Backend runtime
- Express.js – Web framework
- TypeScript – Type safety & better maintainability
- MongoDB & Mongoose – NoSQL database for storing notes
- JWT (JSON Web Token) – Secure user authentication
- Bcrypt – Password hashing for extra security

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Chukwuka-E/RestApI.git
   ```

2. Navigate to the project directory:

   cd note-taking-api

3. Install the dependencies:

   npm install

### Configuration

1️⃣ Create a .env file in the root directory and add your MongoDB URI & JWT secret:

env
```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1h
BCRYPT_SALT_ROUNDS=10
```

### Running the Application

To start the server, run:

npm start

The server will be running on `http://localhost:3000`.

## API Endpoints

### GET /api/notes

Retrieve a list of all notes.

###  Authentication
### 🔹 Authentication  

| Method | Endpoint            | Description             |
|--------|---------------------|-------------------------|
| POST   | /api/auth/register  | Register a new user    |
| POST   | /api/auth/login     | User login & get JWT   |

###  Notes Management  

| Method  | Endpoint          | Description                      |
|---------|------------------|----------------------------------|
| GET     | /api/notes       | Retrieve all user notes         |
| GET     | /api/notes/:id   | Retrieve a specific note by ID  |
| POST    | /api/notes       | Create a new note               |
| PUT     | /api/notes/:id   | Update a note by ID             |
| DELETE  | /api/notes/:id   | Delete a note by ID             |

## My Render link 
https://restapi-2phl.onrender.com

## Testing the API

You can test the API using Postman or any other API testing tool. Make sure to set the appropriate HTTP method and headers as needed . But i used render

## Finally 

💡 Feel free to fork, contribute, or drop me a message if you have any ideas!
Thanks for checking out my work! 🚀💻 – Chukwuka😊😊😊😊
