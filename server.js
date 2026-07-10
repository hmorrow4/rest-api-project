const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} | ${req.method} | ${req.originalUrl}`
  );
  next();
});

// In-memory data
let resources = [
  { id: 1, name: "Task 1" },
  { id: 2, name: "Task 2" }
];

// GET /api/resources
app.get("/api/resources", (req, res) => {
  res.json(resources);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});