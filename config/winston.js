// config/winston.js
const { createLogger, format, transports } = require('winston');
const { MongoDB } = require('winston-mongodb');

// Create a logger
const logger = createLogger({
    level: 'error', // Log only errors and above
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        // Log to the console
        new transports.Console(),
        // Log errors to MongoDB
        new MongoDB({
            db: 'mongodb+srv://admin:admin@learningcluster.yywhd.mongodb.net/lbfancydressdb', // Update with your MongoDB connection string
            collection: 'error_logs', // Name of the collection to store logs
            level: 'error', // Log level to store
            format: format.json(),
        }),
    ]
});

module.exports = logger;
