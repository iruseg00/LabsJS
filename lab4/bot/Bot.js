require('dotenv').config();
require("./db/connect/connect");
require("./observer.js")();

var GroupsService = require("./services/GroupsService");
var ms = require("./constants/ms3");
var logger = require("./logs/pino")
logger.info("message")
GroupsService.create(ms);



