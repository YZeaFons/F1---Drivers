const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { gettingTeams } = require("./src/Handlers/gettingTeams.js");
// require("dotenv").config();
const PORT = process.env.PORT;

conn.sync({ force: true })
  .then(() => {
    server.listen(PORT, async () => {
      console.log(`Server listening on port ${PORT}`);
      await gettingTeams()
    })
  })
  .catch(error => console.error(error))
