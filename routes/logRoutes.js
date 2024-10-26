// routes/errorLogRoutes.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const logger = require('../config/winston');

// Define the ErrorLog model (if needed for fetching)
const ErrorLog = mongoose.model('ErrorLog', new mongoose.Schema({
    level: String,
    message: String,
    timestamp: Date,
}, { collection: 'errorLogs' }));

// Endpoint to view errors
router.get('/view-errors', async (req, res) => {
    try {
        const logs = await ErrorLog.find().sort({ timestamp: -1 }); // Get logs sorted by timestamp
        res.json(logs);
    } catch (err) {
        logger.error(err.message);
        res.status(500).send('Could not fetch log data');
    }
});

module.exports = router;
