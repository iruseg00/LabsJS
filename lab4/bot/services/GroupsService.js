var  Groups = require("../db/models/Groups");

class GroupsService
{
    create(object)
    {
        return Groups.create(
        {
            peer_id: object.peer_id,
            week: object.week
        } ,  
        (err, response)=> {
            if (err) return console.log(err);
            console.log(response.week.Monday)
        })
    }
}

module.exports = new GroupsService();