
const mongoose = require('mongoose');

// =============================================================================
// ~ Schema ~

// Restaurant Schema
const restaurantSchema = mongoose.Schema({

	       Name:  {   type: String,    required: true,     default: undefined   },
	    Address:  {   type: String,    required: true,     default: undefined   },
	      Phone:  {   type: String,    required: true,     default: undefined   },
	Description:  {   type: String,    required: true,     default: undefined   },
	    Website:  {   type: String,    required: false,    default: undefined   },
	      Cater:  {   type: String,    required: false,    default: undefined   },
	    Ratings:  {   type: String,    required: false,    default: undefined   },
	      Hours:  {   type: String,    required: true,     default: undefined   },
	   Category:  {   type: String,    required: true,     default: undefined   },
        Service:  {   type: String,    required: false,    default: undefined   },
});

const Restaurant = module.exports = mongoose.model('Restaurant', restaurantSchema);


// =============================================================================
// ~ Functions ~

// Get Restaurants
module.exports.getRestaurants = (callback, limit) => {
	Restaurant.find(callback).limit(limit);
}





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
