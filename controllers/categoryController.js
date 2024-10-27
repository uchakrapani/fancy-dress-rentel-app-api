// controllers/categoryController.js
const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
    try {
        const { title, description, admin, banner } = req.body;

        if (!admin) {
            return res.status(400).json({ message: 'Admin ID is required' });
        }

        const category = new Category({
            title,
            description,
            admin,
            banner,
        });

        await category.save();
        res.status(201).json({ message: 'Category created successfully', category });
    } catch (error) {
        res.status(500).json({ message: 'Error creating category' });
    }
};

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().populate('admin', '-password'); // Exclude admin password
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching categories' });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate('admin', '-password');
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching category' });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const updateData = { ...req.body, dateupdated: Date.now() };
        const category = await Category.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.json({ message: 'Category updated successfully', category });
    } catch (error) {
        res.status(500).json({ message: 'Error updating category' });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting category' });
    }
};
