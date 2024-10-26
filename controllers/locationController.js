// controllers/locationController.js
const Location = require('../models/Location');
const winston = require('../config/winston');

exports.createLocation = async (req, res) => {
    try {
        // Ensure admin ID is provided in the request body
        const { area, city, state, zip, admin } = req.body;

        if (!admin) {
            return res.status(400).json({ message: 'Admin ID is required' });
        }

        const location = new Location({
            area,
            city,
            state,
            zip,
            admin, // Set admin directly from the request body
        });

        await location.save();
        res.status(201).json({ message: 'Location created successfully', location });
    } catch (error) {
        winston.error(error.message);
        res.status(500).json({ message: 'Error creating location' });
    }
};

exports.getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find().populate('admin', '-password'); // Exclude admin password
        res.json(locations);
    } catch (error) {
        winston.error(error.message);
        res.status(500).json({ message: 'Error fetching locations' });
    }
};

exports.getLocationById = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id).populate('admin', '-password');
        if (!location) {
            return res.status(404).json({ message: 'Location not found' });
        }
        res.json(location);
    } catch (error) {
        winston.error(error.message);
        res.status(500).json({ message: 'Error fetching location' });
    }
};

exports.updateLocation = async (req, res) => {
    try {
        const updateData = { ...req.body, dateupdated: Date.now() };
        const location = await Location.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.json({ message: 'Location updated successfully', location });
    } catch (error) {
        winston.error(error.message);
        res.status(500).json({ message: 'Error updating location' });
    }
};

exports.deleteLocation = async (req, res) => {
    try {
        const location = await Location.findByIdAndDelete(req.params.id);
        if (!location) {
            return res.status(404).json({ message: 'Location not found' });
        }
        res.json({ message: 'Location deleted successfully' });
    } catch (error) {
        winston.error(error.message);
        res.status(500).json({ message: 'Error deleting location' });
    }
};
