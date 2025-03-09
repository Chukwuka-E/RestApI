# Note-Taking API

This is a simple note-taking API built with Node.js, Express, and TypeScript. It allows users to create, retrieve, update, and delete notes.

## Features

- Create new notes
- Retrieve all notes or a specific note by ID
- Delete notes
- Error handling with typed custom error classes

## Technologies Used

- Node.js
- Express
- TypeScript
- MongoDB (with Mongoose)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   git clone https://github.com/yourusername/note-taking-api.git

2. Navigate to the project directory:

   cd note-taking-api

3. Install the dependencies:

   npm install

### Configuration

1. Set up your MongoDB database and update the connection string in `src/app.ts`.

### Running the Application

To start the server, run:

npm start

The server will be running on `http://localhost:3000`.

## API Endpoints

### GET /api/notes

Retrieve a list of all notes.

### GET /api/notes/:id

Retrieve a specific note by ID.

### POST /api/notes

Create a new note. The request body should include `title` and `content`.

### DELETE /api/notes/:id

Delete a note by ID.

## Testing the API

You can test the API using Postman or any other API testing tool. Make sure to set the appropriate HTTP method and headers as needed.

## License

This project is licensed under the MIT License.