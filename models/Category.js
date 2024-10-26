// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin', // Reference to the Admin model
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
    status: {
        type: String,
        enum: ['active', 'inactive'], // Use 'active' or 'inactive'
        default: 'active'
    },
    banner: {
        type: String // URL or path to the banner image
    }
});

module.exports = mongoose.model('Category', categorySchema);
