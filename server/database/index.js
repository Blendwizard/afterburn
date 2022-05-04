const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fetcher', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to database');
  }
});

let schema = mongoose.Schema({
  id: {type: Number, unique: true},
  foods: [{
    name: String,
    amount: String,
    calories: Number
  }],
  activities: [{
    activity: String,
    duration: Number,
    caloriesBurned: Number,
  }]
});

let User = mongoose.model('user', schema);

module.exports = {


}