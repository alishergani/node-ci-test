const app = require('./app');
const log = require("log");
require('dotenv').config({ path: 'variables.env' });


const server = app.listen(process.env.PORT, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});