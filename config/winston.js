const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        // Log to the console
        new transports.Console(),
        // Optionally, you can add a cloud-based logging service
        // e.g., new transports.Http({ url: 'https://example.com/logs' })
    ]
});

module.exports = logger;
