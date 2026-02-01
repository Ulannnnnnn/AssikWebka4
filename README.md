

##  `README.md`

```md
# Web 2 – Authentication Assignment

This project is a simple authentication system built with **Node.js**, **Express**, and **MongoDB**.  
It includes user registration, login, session-based authentication, protected routes, and a minimal frontend.

---

## Features

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
- HTML / CSS / JavaScript

---

## Project Structure

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
cd web2-auth-assignment
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

---

##  Authentication Flow

* **Register**: Creates a new user and stores a hashed password
* **Login**: Verifies credentials and creates a session
* **Profile**: Accessible only when logged in
* **Logout**: Destroys the session and clears the cookie



---

##  API Endpoints

| Method | Endpoint             | Description                  |
| ------ | -------------------- | ---------------------------- |
| POST   | `/api/auth/register` | Register a new user          |
| POST   | `/api/auth/login`    | Login user                   |
| GET    | `/api/auth/profile`  | Get user profile (protected) |
| POST   | `/api/auth/logout`   | Logout user                  |

---

## Screenshots

<img width="1360" height="733" alt="image" src="https://github.com/user-attachments/assets/e56e41f2-930d-485a-bc47-071141fab088" />

<img width="1277" height="736" alt="image" src="https://github.com/user-attachments/assets/314324d0-7f3c-454f-9764-460f100eaa9f" />

<img width="1270" height="747" alt="image" src="https://github.com/user-attachments/assets/32d22ea5-8b5c-42ab-abe7-3b09a83cdec8" />

<img width="1282" height="738" alt="image" src="https://github.com/user-attachments/assets/defe1b14-889d-4f97-90fb-dd81a11b6586" />

<img width="1278" height="745" alt="image" src="https://github.com/user-attachments/assets/54303cab-dc17-4fa2-b9f5-ee55c062adad" />

<img width="1277" height="737" alt="image" src="https://github.com/user-attachments/assets/6a4de31b-54c2-4ca8-b023-40a9d64608ba" />






