const axios = require("axios");
var message , random_id = 0;

const params = new URLSearchParams();
params.append('access_token', process.env.TOKEN);
params.append('v', process.env.VERSION);

function messageNew(object)
{
    if(object.message.text.indexOf('Тед,') == 0)
    {
        var text = object.message.text.slice(4).toLowerCase();
        if(text.indexOf('функционал') != -1) message = skils;
        random_id++;
        params.append('peer_id', object.message.peer_id);
        params.append('random_id', random_id);
        params.append('message', message);
        axios(
        {
            method: 'post',
            url: `https://api.vk.com/method/messages.send`,
            params
        })
    }
}

var skils = `'Расписание' - выдает расписание на день ,
            'Пара' - выдает информацию о текующей паре `;

module.exports = messageNew;    