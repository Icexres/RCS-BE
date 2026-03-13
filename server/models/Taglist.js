const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Taglist = sequelize.define('Taglist', {
  restaurant_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'restaurant',
      key: 'id'
    }
  },
  tag_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'tags',
      key: 'id'
    }
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 1.0  // default weight
  }
}, {
  tableName: 'taglist',
  timestamps: false
});

module.exports = Taglist;