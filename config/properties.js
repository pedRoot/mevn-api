const chalk = require("chalk");
const variblesEnv =  process.env

module.exports = {
  PORT: variblesEnv.PORT,
  DB: variblesEnv.DB,
  CONNECTED: chalk.bold.cyan,
  ERROR: chalk.bold.red,
  TERMINATION: chalk.bold.magenta,
  SUCCESS: chalk.yellow
};
