const minimist = require("minimist");
const qs = require("qs");

function parseArgs() {
  return minimist(process.argv.slice(2));
}

function buildQuery(params) {
  return qs.stringify(params);
}

module.exports = { parseArgs, buildQuery };
