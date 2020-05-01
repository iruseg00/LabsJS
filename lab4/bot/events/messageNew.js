const axios = require("axios");
var message = 'Danic.';
var random_id = 0;

function messageNew(object)
{
    if(object.message.text.indexOf('Тед,') == 0)
    {
        var text = object.message.text.slice(4);
        console.log(text)
        random_id++;
        return axios.get(`https://api.vk.com/method/messages.send?peer_id=${object.message.peer_id}&random_id=${random_id}&message=${message}&access_token=${process.env.TOKEN}&v=${process.env.VERSION}`);
    }
    console.log(object)
}

module.exports = messageNew;