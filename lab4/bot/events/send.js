const axios = require("axios");

var random_id = 0;
const params = new URLSearchParams();
params.append('access_token', process.env.TOKEN);
params.append('v', process.env.VERSION);

function send(textToSend , peer_id)
{
    random_id++;
    params.append('peer_id', peer_id);
    params.append('random_id', random_id);
    params.append('message', textToSend);
    axios(
    {
        method: 'post',
        url: `https://api.vk.com/method/messages.send`,
        params
    })
}

module.exports = send;