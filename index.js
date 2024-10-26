require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
const adminRoutes = require('./routes/adminRoutes');
const locationRoutes = require('./routes/locationRoutes');
const errorRoutes = require('./routes/logRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const { swaggerUi, swaggerSpec } = require('./config/swagger');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

connectDB();

// Set up Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use('/api/admins', adminRoutes); // Admin routes
app.use('/api/locations', locationRoutes);
app.use('/api/error', errorRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
