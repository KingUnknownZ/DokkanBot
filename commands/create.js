module.exports.run = (client, message, args) => {
const Discord = require("discord.js")
const sql = require("sqlite");
const SQLite = require("better-sqlite3");
const lite = new SQLite('./japan.db');
sql.open("./japan.db");

      lite.prepare(`CREATE TABLE IF NOT EXISTS 'temp'(
      'id'	INT,
      'name'	TEXT,
      'super_name'	TEXT,
      'super_description'	TEXT,
      'passive_skill_name'	TEXT,
      'passive_skill_description'	TEXT,
      'leader_skill_name'	TEXT,
      'leader_skill_description'	TEXT,
      'link_skill1_name'	TEXT,
      'link_skill1_description'	TEXT,
      'link_skill2_name'	TEXT,
      'link_skill2_description'	TEXT,
      'link_skill3_name'	TEXT,
      'link_skill3_description'	TEXT,
      'link_skill4_name'	TEXT,
      'link_skill4_description'	TEXT,
      'link_skill5_name'	TEXT,
      'link_skill5_description'	TEXT,
      'link_skill6_name'	TEXT,
      'link_skill6_description'	TEXT,
      'link_skill7_name'	TEXT,
      'link_skill7_description'	TEXT,
      'category1_name'	TEXT,
      'category2_name'	TEXT,
      'category3_name'	TEXT,
      'category4_name'	TEXT,
      'category5_name'	TEXT,
      'category6_name'	TEXT
    );`).run();

lite.prepare(`INSERT OR REPLACE INTO temp (id) VALUES (1);`).run();


}


module.exports.help = {
  name: "create"
}
