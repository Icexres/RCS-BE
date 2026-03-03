const express = require('express');
const authRoutes = require('./authRoutes');
const restaurantRoutes = require('./restaurantRoutes');

const router = express.Router();

// Mount auth routes
router.use('/auth', authRoutes);

// Mount restaurant routes
router.use('/restaurants', restaurantRoutes);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;