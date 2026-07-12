# RESTful API Resource Tracker

## Description

This is a localized RESTful API built using Node.js and Express. 
The API tracks a collection of resources using an in-memory JavaScript array instead of a database.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman

## How to Run

1. Install dependencies:


npm install


2. Start the server:


npm start


The API runs at:


http://localhost:3000


---

# API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/resources | Returns all resources |
| GET | /api/resources/:id | Returns one resource by ID |
| POST | /api/resources | Creates a new resource |
| PUT | /api/resources/:id | Updates an existing resource |
| DELETE | /api/resources/:id | Deletes a resource |

---

# Testing Evidence

All endpoints were tested using Postman.

## GET All Resources

Request:


GET /api/resources


Result:


Status: 200 OK


Response example:

json
[
  {
    "id": 1,
    "name": "Task 1"
  }
]


---

## GET Resource By ID

Request:


GET /api/resources/1


Result:


Status: 200 OK

Response example:

json
{
  "id": 1,
  "name": "Task 1"
}


---

## GET Missing Resource

Request:


GET /api/resources/999


Result:


Status: 404 Not Found


Response:

json
{
  "message": "Resource not found"
}


---

## POST Create Resource

Request:


POST /api/resources


Body:

json
{
  "name": "New Task"
}


Result:


Status: 201 Created


Response example:

json
{
  "id": 3,
  "name": "New Task"
}


---

## PUT Update Resource

Request:


PUT /api/resources/1


Body:

json
{
  "name": "Updated Task"
}


Result:


Status: 200 OK


Response example:

json
{
  "id": 1,
  "name": "Updated Task"
}


---

## DELETE Resource

Request:


DELETE /api/resources/1


Result:


Status: 200 OK


Response example:

json
{
  "id": 1,
  "name": "Updated Task"
}


---

# Middleware

The API includes:

- `express.json()` middleware for parsing JSON request bodies.
- Custom logging middleware that records:
  - Timestamp
  - HTTP method
  - Requested endpoint route

Example log:


7/12/2026, 1:46:10 PM | POST | /api/resources