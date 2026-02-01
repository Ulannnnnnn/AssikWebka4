

##  `README.md`

```md
# Web 2 – Authentication Assignment

This project is a simple authentication system built with **Node.js**, **Express**, and **MongoDB**.  
It includes user registration, login, session-based authentication, protected routes, and a minimal frontend.

---

##  Features

- User registration with password hashing (**bcrypt**)
- User login with sessions (**express-session**)
- Protected profile route
- Logout functionality
- Session-based authentication using cookies
- Simple custom frontend (HTML, CSS, JavaScript)
- MongoDB integration using **Mongoose**

---

##  Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- express-session
- HTML / CSS / JavaScript (no frameworks)

---

##  Project Structure

```

assignment4-auth/
├── config/
│   └── db.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── public/
│   ├── index.html
│   ├── profile.html
│   ├── style.css
│   ├── script.js
│   └── profile.js
├── server.js
├── package.json
├── package-lock.json
└── .gitignore

````

---

##  Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/web2-auth-assignment.git
````

2. Navigate to the project folder:

```bash
cd assignment4-auth
```

3. Install dependencies:

```bash
npm install
```



5. Start the server:

```bash
node server.js
```

6. Open in browser:

```
http://localhost:3000/
```


##  Authentication Flow

* **Register**: Creates a new user and stores a hashed password
* **Login**: Verifies credentials and creates a session
* **Profile**: Accessible only when logged in
* **Logout**: Destroys the session and clears the cookie


## API Endpoints

| Method | Endpoint             | Description                  |
| ------ | -------------------- | ---------------------------- |
| POST   | `/api/auth/register` | Register a new user          |
| POST   | `/api/auth/login`    | Login user                   |
| GET    | `/api/auth/profile`  | Get user profile (protected) |
| POST   | `/api/auth/logout`   | Logout user                  |

## Screenshots

![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-5.png)