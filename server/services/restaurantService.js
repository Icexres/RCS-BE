const { Restaurant } = require('../models');

class RestaurantService {
  async getAllRestaurants() {
    return await Restaurant.findAll();
  }

  async getRestaurantById(id) {
    return await Restaurant.findByPk(id);
  }

  async createRestaurant(data) {
    return await Restaurant.create(data);
  }
}

module.exports = new RestaurantService();
