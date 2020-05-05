const moment = require("moment");
const GroupsService = require("../../services/GroupsService");
const send = require("../send");
const time = require("../../constants/time").isolation;

function infoOfPara(peer_id)
{
    var answer = "";
    var now = moment().hour(15).minute(50);
    GroupsService.find(peer_id).then(result=>
    {
        var day = result[moment().week() % 2 ? 'oddWeek' : 'week'][moment().format( 'dddd' )];
        day.every((element, index) => 
        {
            if( time[element.number - 1][0].from(now).indexOf("in") == 0) 
            {
                answer = time[element.number - 1][0].locale("ru").from(now) + " начало пары\n"
                + element.para.name + "\n" 
                + element.para.room + "\n" 
                + element.para.lesson + "\n" ;
                return false;
            };
            if( time[element.number - 1][1].from(now).indexOf("in") == 0) 
            {
                answer = time[element.number - 1][1].locale("ru").from(now) + " эта пара закончится\n"
                + element.para.name + "\n" 
                + element.para.room + "\n" 
                + element.para.lesson + "\n" ;
                if(element.number != day.length)
                {
                    var nextEl = day[index + 1];
                    answer += "\n" + "Следующая пара: \n"
                    + nextEl.para.name + "\n" 
                    + nextEl.para.room + "\n" 
                    + nextEl.para.lesson + "\n" ;
                }
                return false;
            }
            return true;
        });
        console.log(answer)
        return send(answer , peer_id); 
    });      
}

module.exports = infoOfPara;