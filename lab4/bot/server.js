const fastify = require ('fastify')({logger : true});
const bodyParser = require("body-parser");

fastify.listen(11311, (err, address) => 
{
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
});

fastify.use(bodyParser.json({ limit: "10mb" }));

fastify.post('/', (request, reply)=> {
    request.log('request type:' + request.body.type + "group_id: " + request.body.group_id)
    reply.code(200);
    if(request.body.type == 'confirmation') reply.send("bd1e652c");
})

module.exports = fastify;