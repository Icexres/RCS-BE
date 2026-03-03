'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants', [
      {
        r_name: 'Fire And Ice Pizzeria - Thamel',
        r_desc: 'Famous Italian restaurant in Thamel known for wood-fired pizzas, signature Fire And Ice pizza, pasta, and vegetarian-friendly dishes.',
        r_location: 'Thamel, Kathmandu',
        phone: '+977-1-4250210',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        r_name: 'The Workshop Eatery - Bakhundole',
        r_desc: 'Modern casual eatery known for chicken bites, burgers, wraps, bagels, donuts, breakfast items, fries, and salads. Popular for spicy chicken burgers and Chick n\' Bites.',
        r_location: 'Bakhundole, Lalitpur',
        phone: '986-0431504',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurants', null, {});
  }
};
