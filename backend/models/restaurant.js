
const mongoose = require('mongoose');

// =============================================================================
// ~ Schema ~

// Restaurant Schema
const restaurantSchema = mongoose.Schema({

         Name:  {   type: String,    required: true,    default: null   },
        Email:  {   type: String,    required: true,    default: null   },
       Passwd:  {   type: String,    required: true,    default: null   },

      Address:  {   type: String,    required: true,    default: null   },
        Phone:  {   type: String,    required: true,    default: null   },
  Description:  {   type: String,    required: true,    default: null   },
      Website:  {   type: String,    required: true,    default: null   },
        Cater:  {   type: String,    required: true,    default: null   },
      Ratings:  {   type: Number,    required: true,    default: null   },
        Hours:  {   type: String,    required: true,    default: null   },
     Category:  {   type: String,    required: true,    default: null   },
      Service:  {   type: String,    required: true,    default: null   },

     Distance:  {   type: Number,    required: true,    default: null   },
          Lat:  {   type: Number,    required: true,    default: null   },
          Lng:  {   type: Number,    required: true,    default: null   },
        Media:  {   type: Array,     required: false,   default: null   },
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

// Get All Info of One Restaurant (queried by Restaurant Email (i.e login))
module.exports.getRestaurantByEmail = (email, callback) => {
	Restaurant.findOne({ Email: email }, callback);
};

// Get Categories of All Restaurants in the Database
module.exports.getCategories = (callback, limit) => {
	Restaurant.find({}, { Category: 1, _id: 0 }, callback).limit(limit);
};



// =============================================================================
// ~ CRUD Functions ~

// Add Restaurant
module.exports.addRestaurant = (login, passwd, callback) => {
	Restaurant.create(restaurant, callback);
}

// Update Restaurant
module.exports.updateRestaurant = (id, restaurant, options, callback) => {

	var query = {_id: id};
	var update = {
		name: restaurant.name
	}
	Restaurant.findOneAndUpdate(query, update, options, callback);
}

// Delete Restaurant
module.exports.removeRestaurant = (id, callback) => {
	Restaurant.remove({_id: id}, callback);
}



// =============================================================================
// ~ Mongo Commands ~

// /* DELETE A FIELD FOR ALL DOCUMENTS OF A COLLECTION */
// db.restaurants.update({}, {$unset: { "FIELD": 1 }} , {multi: true})

// /* RENAME A FIELD FOR ALL DOCUMENTS OF A COLLECTION */
// db.restaurants.updateMany({}, { $rename: { "FIELD": "NEW_FIELD" }})

// /* SETS A FIELD FOR ALL DOCUMENTS OF A COLLECTION; IF NOT EXISTANT THAN CREATES FIELD (can specify a default)*/
// db.restaurants.updateMany({}, { $set: { "FIELD": "" }})
// db.restaurants.update({}, {$set : { "FIELD": null }}, {upsert:false, multi:true})
