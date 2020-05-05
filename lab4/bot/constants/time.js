const moment = require("moment");
const time =
{
    "standart":
    [
        [ moment().hour(8).minute(10)  , moment().hour(9).minute(40)  ],
        [ moment().hour(9).minute(50)  , moment().hour(11).minute(20) ],
        [ moment().hour(11).minute(30) , moment().hour(13).minute(0)  ],
        [ moment().hour(13).minute(30) , moment().hour(15).minute(0)  ],
        [ moment().hour(15).minute(10) , moment().hour(16).minute(40) ],
        [ moment().hour(16).minute(50) , moment().hour(18).minute(20) ],
        [ moment().hour(18).minute(30) , moment().hour(20).minute(0)  ],
        [ moment().hour(20).minute(0)  , moment().hour(21).minute(30) ],
    ],
    "isolation":
    [
        [ moment().hour(9).minute(0)   , moment().hour(10).minute(20) ],
        [ moment().hour(10).minute(30) , moment().hour(11).minute(50) ],
        [ moment().hour(12).minute(0)  , moment().hour(13).minute(20) ],
        [ moment().hour(13).minute(50) , moment().hour(15).minute(10) ],
        [ moment().hour(15).minute(20) , moment().hour(16).minute(40) ],
        [ moment().hour(16).minute(50) , moment().hour(18).minute(10) ],
        [ moment().hour(18).minute(20) , moment().hour(19).minute(40) ],
        [ moment().hour(19).minute(50) , moment().hour(21).minute(10) ],
    ],
};

module.exports = time;