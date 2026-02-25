const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Favourite = sequelize.define('Favourite', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  restaurant_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'restaurant',
      key: 'id'
    }
  }
}, {
  tableName: 'favourites',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
});

module.exports = Favourite;