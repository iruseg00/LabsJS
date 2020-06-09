const GroupsService = require("../services/GroupsService");

async function routes(fastify , options)
{
    fastify.post("/bot/table" , (request , reply)=>
    {
       let res = GroupsService.findByIdAndUpdate(request.body.id , 
        {week: request.body.week , oddWeek: request.body.oddWeek});
       if(!res) 
       {
        reply.code(500);
        reply.send("Error id!");
       }
       else
       {
        reply.code(200);
        reply.send("ok");  
       }
    });
}

module.exports = routes;