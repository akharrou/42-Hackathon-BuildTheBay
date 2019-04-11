let mongoose = require('mongoose');

// Restraunt Schema
let restrauntSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  body:{
    type: String,
    required: true
  }
});

let Restraunt = module.exports = mongoose.model('Restraunt', articleSchema);
