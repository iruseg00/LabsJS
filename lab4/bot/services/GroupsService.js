var Groups = require("../db/models/Groups");
var logger = require("../logs/pino")
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
            if (err) return logger.error(err)
        })
    }
    
    find(peer_id)
    {
        return Groups.findOne({ peer_id },  
        (err, result)=> 
        {
            if (err) return logger.error(err)
        })
    }
}

module.exports = new GroupsService();