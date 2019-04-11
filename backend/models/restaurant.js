
const mongoose = require('mongoose');

// =============================================================================
// ~ Schema ~

// Restaurant Schema
const restaurantSchema = mongoose.Schema({

         Name:  {   type: String,    required: true,    default: null   },
      Address:  {   type: String,    required: true,    default: null   },
        Phone:  {   type: String,    required: true,    default: null   },
  Description:  {   type: String,    required: true,    default: null   },
      Website:  {   type: String,    required: true,    default: null   },
        Cater:  {   type: String,    required: true,    default: null   },
      Ratings:  {   type: String,    required: true,    default: null   },
        Hours:  {   type: String,    required: true,    default: null   },
     Category:  {   type: String,    required: true,    default: null   },
      Service:  {   type: String,    required: true,    default: null   },
     Distance:  {   type: Number,    required: true,    default: null   },
          Lat:  {   type: Number,    required: true,    default: null   },
          Lng:  {   type: Number,    required: true,    default: null   },
});

const Restaurant = module.exports = mongoose.model('Restaurant', restaurantSchema);


// =============================================================================
// ~ Functions ~

// Get All Info of All Restaurants
module.exports.getRestaurants = (callback, limit) => {
	Restaurant.find(callback).limit(limit);
};

// Get All Info of One Restaurant (queried by ID)
module.exports.getRestaurantById = (id, callback) => {
	Restaurant.findOne({ _id: id }, callback);
};

// Get All Info of One Restaurant (queried by Restaurant Name)
module.exports.getRestaurantByName = (name, callback) => {
	Restaurant.findOne({ Name: name }, callback);
};

// Get Categories of All Restaurants in the Database
module.exports.getCategories = (callback, limit) => {
	Restaurant.find({}, { Category: 1, _id: 0 }, callback).limit(limit);
};




/* NOT IMPLEMENTED YET */

// // Add Restaurant
// module.exports.addRestaurant = (restaurant, callback) => {
// 	Restaurant.create(restaurant, callback);
// }

// // Update Restaurant
// module.exports.updateRestaurant = (id, restaurant, options, callback) => {

// 	var query = {_id: id};
// 	var update = {
// 		name: restaurant.name
// 	}
// 	Restaurant.findOneAndUpdate(query, update, options, callback);
// }

// // Delete Restaurant
// module.exports.removeRestaurant = (id, callback) => {
// 	var query = {_id: id};
// 	Restaurant.remove(query, callback);
// }
