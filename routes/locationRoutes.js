// routes/locationRoutes.js
const express = require('express');
const {
    createLocation,
    getAllLocations,
    getLocationById,
    updateLocation,
    deleteLocation
} = require('../controllers/locationController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Locations
 *   description: Location management
 */

/**
 * @swagger
 * /locations:
 *   post:
 *     tags: [Locations]
 *     summary: Create a new location
 *     description: Creates a new location in the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               area:
 *                 type: string
 *                 example: Downtown
 *               city:
 *                 type: string
 *                 example: Mumbai
 *               state:
 *                 type: string
 *                 example: Maharashtra
 *               zip:
 *                 type: string
 *                 example: 400001
 *               admin:
 *                 type: string
 *                 example: 671cacb237be7982d65d5d79
 *     responses:
 *       201:
 *         description: Location created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Location created successfully
 *                 location:
 *                   type: object
 *       500:
 *         description: Error creating location
 */
router.post('/', createLocation);         // Create a new location

/**
 * @swagger
 * /locations:
 *   get:
 *     tags: [Locations]
 *     summary: Get all locations
 *     description: Retrieve all locations
 *     responses:
 *       200:
 *         description: A list of locations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Error fetching locations
 */
router.get('/', getAllLocations);         // Get all locations

/**
 * @swagger
 * /locations/{id}:
 *   get:
 *     tags: [Locations]
 *     summary: Get a location by ID
 *     description: Retrieve a location by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the location to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A location object
 *       404:
 *         description: Location not found
 *       500:
 *         description: Error fetching location
 */
router.get('/:id', getLocationById);      // Get a location by ID

/**
 * @swagger
 * /locations/{id}:
 *   put:
 *     tags: [Locations]
 *     summary: Update a location
 *     description: Update a location by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the location to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               area:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               zip:
 *                 type: string
 *     responses:
 *       200:
 *         description: Location updated successfully
 *       404:
 *         description: Location not found
 *       500:
 *         description: Error updating location
 */
router.put('/:id', updateLocation);       // Update a location by ID

/**
 * @swagger
 * /locations/{id}:
 *   delete:
 *     tags: [Locations]
 *     summary: Delete a location
 *     description: Delete a location by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the location to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Location deleted successfully
 *       404:
 *         description: Location not found
 *       500:
 *         description: Error deleting location
 */
router.delete('/:id', deleteLocation);    // Delete a location by ID

module.exports = router;
