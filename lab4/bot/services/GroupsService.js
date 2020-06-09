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
            if (err) return logger.error(err);
            console.log(result._id)
            return result;
        })
    }
    
    find(peer_id)
    {
        return Groups.findOne({ peer_id },  
        (err, result)=> 
        {
            if (err) return logger.error(err);
            return result;
        })
    }

    findByGroupId(group_id)
    {
        return Groups.findOne({ _id: group_id },  
        (err, result)=> 
        {
            if (err) return logger.error(err);
            return result;
        })
    }

    findByIdAndUpdate(id , update)
    {
        return Groups.findByIdAndUpdate(id , update ,  
            (err, result)=> 
            {
                if (err) return logger.error(err);
                console.log(result)
                return result;
            })
    }
}

module.exports = new GroupsService();