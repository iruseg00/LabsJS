require('dotenv').config();
require("./db/config/connect");
require("./observer.js")();
//require("./server.js");
var GroupsService = require("./services/GroupsService");

GroupsService.create();
