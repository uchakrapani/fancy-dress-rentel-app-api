require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
const adminRoutes = require("./routes/adminRoutes");
const locationRoutes = require("./routes/locationRoutes");
const ErrorLog = require("./models/ErrorLog");
const errorLogRoutes = require("./routes/errorLog");
const categoryRoutes = require("./routes/categoryRoutes");

const { swaggerUi, swaggerSpec } = require("./config/swagger");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

connectDB();

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    apiStatus: "Last bench coder Fancy Store App API is running successfully",
    author_app: "Last Bench Coder",
    author_web: "https://lastbenchcoder.blogspot.com/",
    owner: "Chakrapani Upadhyaya",
  });
});

// Set up Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use("/api/admins", adminRoutes); // Admin routes
app.use("/api/locations", locationRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/errorlogs", errorLogRoutes);

// Error logging middleware
app.use((err, req, res, next) => {
  const errorLog = new ErrorLog({ message: err.message, stack: err.stack });
  errorLog.save().then(() => console.log("Error logged"));
  res.status(500).json({ message: "An error occurred, it has been logged." });
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
