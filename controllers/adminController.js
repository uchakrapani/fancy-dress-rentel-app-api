const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');

exports.createAdmin = async (req, res) => {
    try {
        const admin = new Admin({ ...req.body, loginid: req.body.emailid });
        await admin.save();
        res.status(201).json({ message: 'Admin created successfully', admin });
    } catch (error) {
        res.status(500).json({ message: 'Error creating admin' });
    }
};

exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find().select('-password');
        res.json(admins);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching admins' });
    }
};

exports.getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id).select('-password');
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.json(admin);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching admin' });
    }
};

exports.updateAdmin = async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (updateData.password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(updateData.password, salt);
        }
        const admin = await Admin.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.json({ message: 'Admin updated successfully', admin });
    } catch (error) {
        res.status(500).json({ message: 'Error updating admin' });
    }
};

exports.deleteAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.json({ message: 'Admin deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting admin' });
    }
};
