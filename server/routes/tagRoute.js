const express = require('express');
const tagController = require('../controllers/tagController');

const router = express.Router();

// CRUD route
router.post('/create', tagController.createTag.bind(tagController));
router.get('/all', tagController.getAllTags.bind(tagController));
router.put('/update/:id', tagController.updateTag.bind(tagController));
router.delete('/delete/:id', tagController.deleteTag.bind(tagController));

router.get('/:id', tagController.getTagById.bind(tagController));

// Tag assignment route
router.post('/assign', tagController.assignTagToRestaurant.bind(tagController));
router.post('/remove', tagController.removeTagFromRestaurant.bind(tagController));

// Get tags for a restaurant
router.get('/restaurant/:restaurantId', tagController.getRestaurantTags.bind(tagController));

// Get restaurants by tag
router.get('/restaurants-by-tag/:tagId', tagController.getRestaurantsByTag.bind(tagController));

module.exports = router;