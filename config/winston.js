// config/winston.js
const { createLogger, format, transports } = require('winston');
const { MongoDB } = require('winston-mongodb');
require('dotenv').config();

const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console(),
        new MongoDB({
            db: process.env.MONGO_URI, // Use your MongoDB URI here
            collection: 'errorLogs', // Collection name to store logs
            level: 'error', // Log only errors
        }),
    ],
});

module.exports = logger;
