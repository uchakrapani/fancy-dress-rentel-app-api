const { createLogger, format, transports } = require('winston');
require('winston-mongodb');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.MongoDB({
            level: 'error',
            db: process.env.MONGO_URI,
            collection: 'log_errors'
            // Removed useUnifiedTopology and other deprecated options
        })
    ]
});

module.exports = logger;
