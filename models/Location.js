// models/Location.js
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    area: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    datecreated: {
        type: Date,
        default: Date.now
    },
    dateupdated: {
        type: Date,
        default: Date.now
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin', // Reference to the Admin model
        required: true
    }
});

module.exports = mongoose.model('Location', locationSchema);
