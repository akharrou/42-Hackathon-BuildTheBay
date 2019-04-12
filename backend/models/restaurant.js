
const mongoose = require('mongoose');

// =============================================================================
// ~ Schema ~

// Restaurant Schema
const restaurantSchema = mongoose.Schema({

          _id:  {   type: mongoose.Schema.Types.ObjectId, required: true  },

         Name:  {   type: String,    required: true,    default: ''     },
        Email:  {   type: String,    required: true,    default: ''     },
       Passwd:  {   type: String,    required: true,    default: ''     },

      Address:  {   type: String,    required: false,   default: ''     },
        Phone:  {   type: String,    required: false,   default: ''     },
  Description:  {   type: String,    required: false,   default: ''     },
      Website:  {   type: String,    required: false,   default: ''     },
        Cater:  {   type: String,    required: false,   default: ''     },
      Ratings:  {   type: Number,    required: false,   default: 0      },
        Hours:  {   type: String,    required: false,   default: ''     },
     Category:  {   type: String,    required: false,   default: ''     },
      Service:  {   type: String,    required: false,   default: ''     },
        Media:  {   type: Array,     required: false,   default: []     },

     Distance:  {   type: Number,    required: false,   default: 0      },
          Lat:  {   type: Number,    required: false,   default: 0      },
          Lng:  {   type: Number,    required: false,   default: 0      },
});

const Restaurant = module.exports = mongoose.model('Restaurant', restaurantSchema);

// =============================================================================
// ~ READ Functions ~

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
// { Name: "Kevin's Restaurant",
//   Email: 'kevindevin.bites@gmail.com',
//   Passwd: 'kevindevin' }


// =============================================================================
// ~ ADD/UPDATE/DELETE Functions ~

// Add Restaurant
module.exports.addRestaurant = (newRestaurant, callback) => {
  console.log(newRestaurant);
  Restaurant.create(newRestaurant, callback);
};

// Update Restaurant
module.exports.updateRestaurant = (restaurantName, field, value, options, callback) => {

  // var fieldsToUpdate = {

  // }

	// Restaurant.findOneAndUpdate({ Name: restaurantName }, { field: value }, options, callback);
}

// Delete Restaurant
module.exports.removeRestaurant = (name, callback) => {
	Restaurant.remove({ Name: name }, callback);
}



// =============================================================================
// ~ Mongo Commands ~

/*

  —> DELETE A FIELD FOR ALL DOCUMENTS OF A COLLECTION

      $> db.restaurants.update({}, {$unset: { "FIELD": 1 }} , {multi: true})

  —> RENAME A FIELD FOR ALL DOCUMENTS OF A COLLECTION

      $> db.restaurants.updateMany({}, { $rename: { "FIELD": "NEW_FIELD" }})

  —> SETS A FIELD FOR ALL DOCUMENTS OF A COLLECTION; IF NOT EXISTANT THEN CREATES FIELD (can specify a default

      $> db.restaurants.updateMany({}, { $set: { "FIELD": "" }})
      $> db.restaurants.update({}, {$set : { "FIELD": null }}, {upsert:false, multi:true})

*/
