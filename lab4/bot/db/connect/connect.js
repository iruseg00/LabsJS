var mongoose = require('mongoose');
var logger = require("../../logs/pino");
var host = process.env.NODE_ENV  == "development" ? "localhost" : "db";

var options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
  autoIndex: false, 
  poolSize: 10, 
  bufferMaxEntries: 0
};

mongoose.connect(`mongodb://${host}:27017/`, options)
  .then(()=> logger.info("Connect to db successfully!"))
  .catch(err => logger.error("Error connect to mongodb: " + err));

module.exports = mongoose.connection ;