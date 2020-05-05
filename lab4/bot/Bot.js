require('dotenv').config();
require("./db/config/connect");
require("./observer.js")();
require("./events/messageNew/infoOfPara")(2000000001)
var moment = require('moment');
var GroupsService = require("./services/GroupsService");
var ms = require("./constants/ms3");


GroupsService.create(ms);



// var a = moment([2007, 0, 29 , 3 , 22]);
// var b = moment([2007, 0, 29 , 3 , 33]);
// console.log(a.from(b))

// var st1 = moment().minute(10).hour(8)

// console.log(
//     st1.from(moment())
// )