const mongoose = require('mongoose');
const winston = require('./winston');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        winston.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
