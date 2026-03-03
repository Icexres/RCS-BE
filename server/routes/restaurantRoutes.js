const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const { authMiddleware, adminOnly } = require('../middleware/auth');

// Public routes - anyone can view restaurants
router.get('/', restaurantController.getAllRestaurants);
router.get('/:id', restaurantController.getRestaurantById);

// Protected routes - only admin can create restaurants
router.post('/', authMiddleware, adminOnly, restaurantController.createRestaurant);

module.exports = router;
