const fastify = require ('fastify')({logger : true});
const bodyParser = require("body-parser");

fastify.listen(11311, (err, address) => 
{
  if (err) throw err
  // fastify.log.info(`server listening on ${address}`)
});

fastify.use(bodyParser.json({ limit: "10mb" }));

fastify.post('/', (request, reply)=> 
{
  console.log("body: -->" + request.body)
  reply.code(200);
  reply.send("ok");
})

module.exports = fastify;