// config/winston.js
const { createLogger, format, transports } = require('winston');
const path = require('path');
const fs = require('fs');

// Define the logs directory
const logsDir = path.join(__dirname, '../logs');

// Check if the logs directory exists, if not create it
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true }); // recursive: true creates nested directories
}

const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: path.join(logsDir, 'error.log') })
    ]
});

module.exports = logger;
