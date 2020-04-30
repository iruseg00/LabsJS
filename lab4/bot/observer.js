const axios = require("axios");
const Distributor = require("./events/Distributor.js");

var getLongPollServer = 
`https://api.vk.com/method/groups.getLongPollServer?group_id=${process.env.GROUP_ID}&v=${process.env.VERSION}&access_token=${process.env.TOKEN}`;
function init()
{
    axios.get(getLongPollServer)
        .then( res => Observer(res.data.response))
        .catch( err => console.log(err));
}

function Observer(session)
{
    axios.get(`${session.server}?act=a_check&key=${session.key}&ts=${session.ts}&wait=25`)
            .then(resp=>
            {
                if(resp.data.failed == 2 || resp.data.failed == 3) return init();
                if(resp.data.failed == 1) session.ts = resp.data.ts;
                if(resp.data.updates.length) 
                {
                    Distributor(resp.data.updates)
                    session.ts++;
                }
                return Observer(session);
            })
}            

module.exports = init;
// var getLongPollSettings = 
// `https://api.vk.com/method/groups.getLongPollSettings?group_id=${process.env.GROUP_ID}&v=${process.env.VERSION}&access_token=${process.env.TOKEN}`;
// axios.get(getLongPollSettings).then(res=>console.log(res.data))  