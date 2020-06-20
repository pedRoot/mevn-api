const chalk = require("chalk");
const env =  process.env

module.exports = {
  PORT: env.PORT,
  DB: env.DB,
  CONNECTED: chalk.bold.cyan,
  ERROR: chalk.bold.red,
  TERMINATION: chalk.bold.magenta,
  SUCCESS: chalk.yellow
};
