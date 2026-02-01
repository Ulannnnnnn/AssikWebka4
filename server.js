const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const session = require("express-session");


const app = express();

connectDB();

app.use(express.json());
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(`${req.method} ${req.originalUrl} → ${res.statusCode}`);
  });
  next();
});



app.use(express.static("public"));


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 60 * 1000, // 1 hour
    },
  })
);

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Open: http://localhost:${PORT}/`);
});

