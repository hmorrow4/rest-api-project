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

app.get("/api/resources/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const resource = resources.find((item) => item.id === id);

  if (!resource) {
    return res.status(404).json({
      message: "Resource not found"
    });
  }

  res.json(resource);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});