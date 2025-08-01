# student-api-express-mongodb
# README.md

# Student API

A simple RESTful API for managing student records using Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete student records
- MongoDB database integration with Mongoose
- CORS enabled
- Environment variable support with dotenv

## Project Structure

```
.
├── .env
├── app.js
├── package.json
├── DB/
│   └── db.js
├── Model/
│   └── model.js
├── Routes/
│   └── student.route.js
└── View/
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or remote)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/mujahidul885/student-api-express-mongodb.git
    cd student-api-express-mongodb
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Configure environment variables in `.env`:
    ```
    PORT=3000
    MONGODB_URL='mongodb://localhost:27017/API'
    ```

4. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

All endpoints are prefixed with `/api/students`.

### Get all students

- **GET** `/api/students`
- **Response:** Array of student objects

### Get a single student

- **GET** `/api/students/:id`
- **Response:** Student object

### Add a new student

- **POST** `/api/students`
- **Body:**  
    ```json
    {
      "firstname": "John",
      "lastname": "Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "gender": "Male"
    }
    ```
- **Response:** Created student object

### Update a student

- **PUT** `/api/students/:id`
- **Body:** (fields to update)
- **Response:** Updated student object

### Delete a student

- **DELETE** `/api/students/:id`
- **Response:**  
    ```json
    { "message": "student delete" }
    ```

## Project Files

- [app.js](app.js): Main application entry point.
- [DB/db.js](DB/db.js): MongoDB connection logic.
- [Model/model.js](Model/model.js): Mongoose schema and model for students.
- [Routes/student.route.js](Routes/student.route.js): Express routes for student CRUD operations.

## License

ISC

---
