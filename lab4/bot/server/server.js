const fastify = require ('fastify')();
const bodyParser = require("body-parser");
const logger = require("../logs/pino");
const routes = require("../controllers/TableController");

fastify.register(routes);
fastify.use(bodyParser.json({ limit: "10mb" }));
fastify.register(require('fastify-cors'), { 
  methods: 'GET, OPTIONS, POST',
  origin: '*',
})
fastify.listen(11311 , '0.0.0.0')
  .then(address=> logger.info(`server listening on ${address}`))
  .catch(error=> logger.error(error));



module.exports = fastify;