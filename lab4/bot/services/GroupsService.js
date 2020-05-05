var  Groups = require("../db/models/Groups");

class GroupsService
{
    create(object)
    {
        return Groups.create(
        {
            peer_id: object.peer_id,
            week: object.week,
            oddWeek: object.oddWeek
        } ,  
        (err, result)=> 
        {
            if (err) return console.log(err);
            // console.log(result)
        })
    }
    
    find(peer_id)
    {
        return Groups.findOne({ peer_id },  
            (err, result)=> 
            {
                if (err) return console.log(err);
                // return result;
            });
    }
}

module.exports = new GroupsService();