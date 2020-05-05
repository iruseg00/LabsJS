const moment = require("moment");
const GroupsService = require("../../services/GroupsService");
const send = require("../send");

function timetable(peer_id)
{
    var answer = "";
    GroupsService.find(peer_id).then(result=>
    {
        result[moment().week() % 2 ? 'oddWeek' : 'week'][moment().format( 'dddd' )]
        .forEach(element => 
        {
            answer += "" + "\n"
                + element.para.name + "\n" 
                + element.para.room + "\n" 
                + element.para.lesson + "\n" ;
        });
        return send(answer , peer_id); 
    });       
}

module.exports = timetable;