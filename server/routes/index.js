const express = require('express');
const router = express.Router();
// here you call routes with their controller that invoke a service 
// Health check endpoint ok
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

// Add more routes here as needed
// Example: router.use('/users', userRoutes);

module.exports = router;
