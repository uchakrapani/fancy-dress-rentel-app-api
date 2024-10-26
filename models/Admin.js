const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    fullname: String,
    emailid: String,
    phone: String,
    loginid: String,
    password: String,
    role: { type: String, enum: ['read', 'read_write'], default: 'read' },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' }
}, {
    timestamps: { createdAt: 'datecreated', updatedAt: 'dateupdated' }
});

adminSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('Admin', adminSchema);
