const {Tag, Taglist, Restaurant} = require('../models');

class tagService{
    async createTag(tagData){
        const {name} = tagData;
        const existingTag = await Tag.findOne({ where: { name } });
        if(existingTag){
            throw new Error('Tag already exists with this name');
        }

        const tag = await Tag.create(tagData);
        return tag;
    }

    async getAllTags(){
        const tags = await Tag.findAll({
            order: [['name', 'ASC']]
        });
        return tags;
    }
    
    async getTagById(tagId){
        const tag = await Tag.findByPk(tagId);
        if (!tag){
            throw new Error('Tag not found');
        }
        return tag;
    }
    async updateTag(tagId, updateData){
        const tag = await Tag.findByPk(tagId);
        if (!tag){
            throw new Error('Tag not found');
        }
        await tag.update(updateData);
        return tag;
    }
    async deleteTag(tagID){
        const tag=await Tag.findByPk(tagID);
        if (!tag){
            throw new Error('Tag not found');
        }
        await Taglist.destroy({
            where: { tag_id: tagID }
        });
        
        await tag.destroy();
        return { message: 'Tag deleted successfully' };
    }
    async assignTagToRestaurant(restaurantId,tagId){
        const restaurant = await Restaurant.findByPk(restaurantId);
        if (!restaurant){
            throw new Error('Restaurant not found');
        }
        const tag = await Tag.findByPk(tagId);
        if (!tag){
            throw new Error('Tag not found');
        }
        const existingAssignment = await Taglist.findOne({
            where: { restaurant_id: restaurantId, tag_id: tagId }
        });
        if (existingAssignment){
            throw new Error('Tag is already assigned to this restaurant');
        }
        const taglist = await Taglist.create({
            restaurant_id: restaurantId,
            tag_id: tagId
        });
        return taglist;
    }
    async removeTagFromRestaurant(restaurantId, tagId){
        const taglist = await Taglist.findOne({
            where:{restaurant_id: restaurantId, tag_id: tagId}
        });
        if (!taglist){
            throw new Error('Tag is not assigned to this restaurant');
        }
        await taglist.destroy();
        return { message: 'Tag removed from restaurant'};
    }
    async getRestaurantTags(restaurantId){
        const restaurant = await Restaurant.findByPk(restaurantId,{
            include:[{
                model: Tag,
                through: { attributes: [] }
            }]
        });

        if (!restaurant){
            throw new Error('Restaurant not found');
        }
        return restaurant.Tags;
    }

    async getRestaurantByTag(tagId){
        const tag = await Tag.findByPk(tagId,{
            include:[{
                model: Restaurant,
                through: { attributes: [] }
            }]
        });
        if (!tag){
            throw new Error('Tag not found');
        }
        return tag.Restaurants;
    }
}

module.exports = new tagService();