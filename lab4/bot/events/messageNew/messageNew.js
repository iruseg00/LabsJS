const send = require("../send");
const {skils} = require("../../constants/phrases");
const timetable = require("./timetable");
const infoOfPara = require("./infoOfPara");

function messageNew(object)
{
    if(object.message.text.indexOf('Тед,') == 0)
    {
        var text = object.message.text.slice(4).toLowerCase();
        if(text.indexOf('функционал') != -1) send(skils , object.message.peer_id);
        if(text.indexOf('расписание') != -1) timetable(object.message.peer_id);
        if(text.indexOf('пара') != -1) infoOfPara(object.message.peer_id);
    }
}

module.exports = messageNew;    