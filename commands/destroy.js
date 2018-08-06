module.exports.run = (client, message, args) => {
const Discord = require("discord.js")
const SQLite = require("better-sqlite3");
const lite = new SQLite('./japan.db');

lite.prepare(`DROP TABLE temp;`).run();


}


module.exports.help = {
  name: "destroy"
}
