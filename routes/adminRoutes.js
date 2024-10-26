// routes/adminRoutes.js
const express = require('express');
const {
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdmin,
    deleteAdmin,
} = require('../controllers/adminController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: Admin management
 */

/**
 * @swagger
 * /admins:
 *   post:
 *     tags: [Admins]
 *     summary: Create a new admin
 *     description: Creates a new admin in the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *                 example: John Doe
 *               emailid:
 *                 type: string
 *                 example: johndoe@example.com
 *               phone:
 *                 type: string
 *                 example: 1234567890
 *               password:
 *                 type: string
 *                 example: password123
 *               role:
 *                 type: string
 *                 enum: [read, read_write]
 *                 example: read_write
 *     responses:
 *       201:
 *         description: Admin created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Admin created successfully
 *                 admin:
 *                   type: object
 *       500:
 *         description: Error creating admin
 */
router.post('/', createAdmin);        // For creating an admin

/**
 * @swagger
 * /admins:
 *   get:
 *     tags: [Admins]
 *     summary: Get all admins
 *     description: Retrieve all admins
 *     responses:
 *       200:
 *         description: A list of admins
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Error fetching admins
 */
router.get('/', getAllAdmins);        // For getting all admins

/**
 * @swagger
 * /admins/{id}:
 *   get:
 *     tags: [Admins]
 *     summary: Get an admin by ID
 *     description: Retrieve an admin by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the admin to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: An admin object
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Error fetching admin
 */
router.get('/:id', getAdminById);     // For getting an admin by ID

/**
 * @swagger
 * /admins/{id}:
 *   put:
 *     tags: [Admins]
 *     summary: Update an admin
 *     description: Update an admin by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the admin to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *               emailid:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [read, read_write]
 *     responses:
 *       200:
 *         description: Admin updated successfully
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Error updating admin
 */
router.put('/:id', updateAdmin);      // For updating an admin by ID

/**
 * @swagger
 * /admins/{id}:
 *   delete:
 *     tags: [Admins]
 *     summary: Delete an admin
 *     description: Delete an admin by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the admin to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Admin deleted successfully
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Error deleting admin
 */
router.delete('/:id', deleteAdmin);   // For deleting an admin by ID

module.exports = router;
