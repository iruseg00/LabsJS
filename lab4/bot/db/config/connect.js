var mongoose = require('mongoose');

var env = process.env.NODE_ENV || "development";
var config = require("./config.json")[env];

var options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  user: config.username,
  pass: config.password,
  autoIndex: false, 
  poolSize: 5, 
  bufferMaxEntries: 0
};

mongoose.connect(`mongodb://${config.host}:27017/`, options)
  .then(()=> console.log("Connect to db successfully!"))
  .catch(err => console.log('\x1b[44m%s\x1b[0m' , "Error connect to mongodb: " + err));

module.exports = mongoose.connection ;