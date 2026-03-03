// Authentication middleware
const authMiddleware = (req, res, next) => {
  try {
    // Get user ID from headers 
    const userId = req.headers['user-id'];
    const userRole = req.headers['user-role'];
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required. Please log in.'
      });
    }
    
    // Attach user info to request
    req.user = {
      id: userId,
      role: userRole || 'user'
    };
    
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid authentication'
    });
  }
};

// Admin-only middleware
const adminOnly = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required'
    });
  }
  next();
};

module.exports = { authMiddleware, adminOnly };
