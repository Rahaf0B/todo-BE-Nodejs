
# Node.js Project

This is a Node.js project 

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (>= 14.x)
- npm (>= 6.x) or yarn

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Rahaf0B/todo-BE-Nodejs.git


2. Install the dependencies
    npm install

3. Run the server
    npm run start

4. To get all Todo use the API => http://localhost:8080/todo/
    method: GET
5. To add a new Todo use the API => http://localhost:8080/todo/add-todo/
    method: POST
    body: {
    "title":"todo_name",
    "content":"todo_content",
    }