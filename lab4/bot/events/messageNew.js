const axios = require("axios");
var message = 'Danic.';
var random_id = 0;
function messageNew(object)
{
    if(object.object.message.text.indexOf('Тед, кто лох?') == 0)
    {
        random_id++;
        axios.get(`https://api.vk.com/method/messages.send?peer_id=${object.object.message.peer_id}&random_id=${random_id}&message=${message}&access_token=${process.env.TOKEN}&v=${process.env.VERSION}`);
    }
    console.log(object)
}

module.exports = messageNew;