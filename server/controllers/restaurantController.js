const restaurantService = require('../services/restaurantService');

class RestaurantController {
  async getAllRestaurants(req, res) {
    try {
      const restaurants = await restaurantService.getAllRestaurants();
      res.status(200).json({ success: true, data: restaurants });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async getRestaurantById(req, res) {
    try {
      const { id } = req.params;
      const restaurant = await restaurantService.getRestaurantById(id);
      if (!restaurant) {
        return res.status(404).json({ success: false, message: 'Restaurant not found' });
      }
      res.status(200).json({ success: true, data: restaurant });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async createRestaurant(req, res) {
    try {
      const restaurantData = req.body;
      const restaurant = await restaurantService.createRestaurant(restaurantData);
      res.status(201).json({ success: true, message: 'Restaurant created successfully', data: restaurant });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
}

module.exports = new RestaurantController();