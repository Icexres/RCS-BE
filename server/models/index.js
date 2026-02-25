const User = require('./User');
const Restaurant = require('./Restaurant');
const Rating = require('./Rating');
const Like = require('./Like');
const Favourite = require('./Favourite');
const Tag = require('./Tag');
const Taglist = require('./Taglist');

// Define associations
User.hasMany(Rating, { foreignKey: 'user_id' });
Rating.belongsTo(User, { foreignKey: 'user_id' });

Restaurant.hasMany(Rating, { foreignKey: 'restaurant_id' });
Rating.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });

User.belongsToMany(Restaurant, { through: Like, foreignKey: 'user_id' });
Restaurant.belongsToMany(User, { through: Like, foreignKey: 'restaurant_id' });

User.belongsToMany(Restaurant, { through: Favourite, foreignKey: 'user_id', as: 'FavouriteRestaurants' });
Restaurant.belongsToMany(User, { through: Favourite, foreignKey: 'restaurant_id', as: 'FavouritedBy' });

Restaurant.belongsToMany(Tag, { through: Taglist, foreignKey: 'restaurant_id' });
Tag.belongsToMany(Restaurant, { through: Taglist, foreignKey: 'tag_id' });

module.exports = {
  User,
  Restaurant,
  Rating,
  Like,
  Favourite,
  Tag,
  Taglist
};