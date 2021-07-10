const mongoose = require('mongoose');
const db = require('../models/transaction.js');
require('dotenv').config()


mongoose.connect(process.env.MONGODB_URI, {

  // mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const budgetSeed = [{
    name: 'Bread',
    value: 5,
    date: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    name: 'Milk',
    value: 3,
    date: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    name: 'Cheese',
    value: 6,
    date: new Date(new Date().setDate(new Date().getDate() - 9)),
  },
  {
    name: 'Eggs',
    value: 3,
    date: new Date(new Date().setDate(new Date().getDate() - 9)),
  }
];

db.deleteMany({})
  .then(() => db.collection.insertMany(budgetSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });