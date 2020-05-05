const pino = require('pino');
const childProcess = require('child_process');
const stream = require('stream');

const cwd = process.cwd();
const {env} = process;
const logPath = `${cwd}/logs/output_log`;

const logThrough = new stream.PassThrough();
const logger = pino({name: 'bot'}, logThrough);

const child = childProcess.spawn(process.execPath, [
  require.resolve('pino-tee'),
  'warn' , `${logPath}/warn.log`,
  'error', `${logPath}/error.log`,
  'fatal', `${logPath}/fatal.log`,
  'info' , `${logPath}/info.log`
], {cwd, env});

logThrough.pipe(child.stdin);

module.exports = logger;