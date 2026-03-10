const express = require('express');
const authRoutes = require('./authRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const tagRoute = require('./tagRoute');
const likeRoutes = require('./likeRoutes');
const favouriteRoutes = require('./favouriteRoutes');

const router = express.Router();

// Mount routes
router.use('/auth', authRoutes);
router.use('/restaurant', restaurantRoutes);
router.use('/tag', tagRoute);
router.use('/like', likeRoutes);
router.use('/favourite', favouriteRoutes);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;