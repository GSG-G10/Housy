const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('../connection');

const dbBuild = () => {
  let sql = readFileSync(join(__dirname, 'build.sql')).toString();
  sql += readFileSync(join(__dirname, 'adminsFackData.sql')).toString();
  sql += readFileSync(join(__dirname, 'agentsFackData.sql')).toString();
  sql += readFileSync(join(__dirname, 'imagesFackData.sql')).toString();
  sql += readFileSync(join(__dirname, 'imagesFackData.sql')).toString();
  return connection.query(sql);
};
module.exports = { dbBuild };
