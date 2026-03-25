# ai-product-search

## Overview

This project is a backend API that allows users to search products using natural language queries such as:

* "cheap laptops under 50000"
* "red running shoes"
* "mobile with good battery"

The system parses the user query, extracts meaningful filters, and returns matching products from a MySQL database.

---

## Tech Stack

* Node.js (Express.js)
* MySQL
* JWT Authentication
* Bcrypt (Password Hashing)

---

## Project Structure

```
project/
 ├── src/
 │    ├── config/
 │    ├── controllers/
 │    ├── models/
 │    ├── routes/
 │    ├── middleware/
 │    └── utils/
 ├── database.sql
 ├── README.md
 ├── package.json
```

---

## Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-link>
cd project
```

### 2. Install dependencies

```
npm install
```

### 3. Create `.env` file

```
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=productsearch

JWT_SECRET=your_secret_key
```

---

### 4. Setup Database

```
CREATE DATABASE productsearch;
USE productsearch;
SOURCE product.sql;
```

---

### 5. Run the server

```
npm run dev
```

Server will start on:

```
http://localhost:5000
```

---

## Authentication APIs

### Register

```
POST /api/auth/register
```

Request Body:

```
{
  "name": "Tarun",
  "email": "tarun@test.com",
  "password": "123456"
}
```

---

### Login

```
POST /api/auth/login
```

Response:

```
{
  "success": true,
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

## Search API (Core Feature)

### Endpoint

```
GET /api/search?q=your_query
```

### Headers

```
Authorization: Bearer YOUR_TOKEN
```

---

## Example Queries

* `/api/search?q=laptop under 50000`
* `/api/search?q=cheap mobile`
* `/api/search?q=red shoes`
* `/api/search?q=mobile with battery`


---

## Example Response

```
{
  "success": true,
  "filters": {
    "category": "laptop",
    "max_price": 50000
  },
  "data": [
    {
      "id": 1,
      "name": "Dell Laptop",
      "price": 45000
    }
  ]
}
```

---

## Edge Cases Handled

* Empty query
* No results found
* Invalid input
* Multiple filters together

---

## Security

* Password hashing using bcrypt
* JWT-based authentication
* Protected routes using middleware
* Parameterized queries (SQL injection safe)

---

## Features Implemented

* User authentication (Register/Login)
* Natural language query parsing
* Dynamic SQL query building
* MySQL database integration
* Clean MVC architecture

---

## Testing

Use Postman to test APIs:

1. Register a user
2. Login to get token
3. Use token in search API

---

## Notes

* Minimum 10+ products included in database
* Query parsing implemented using simple logic (no external AI APIs)
* Designed for scalability and readability

---

## Author

Tarun Singh Tanwar
