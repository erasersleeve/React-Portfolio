const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/message"
);

const messageSeed = [
  {
    text: "Message testing 1",
    author: "testerson",
    date: new Date(Date.now())
  },
  {
    text: "Message testing 2",
    author: "testerson jr",
    date: new Date(Date.now())
  }
];

db.Message
  .remove({})
  .then(() => db.Message.collection.insertMany(messageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
