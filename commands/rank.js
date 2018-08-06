const sql = require("sqlite");
const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
  var RankID = args;
  sql.open("./global.db");
  getRank(message, args[0]);

let rank2 = '0';
  async function getRank(message) {

    let RankRow = await sql.get(`SELECT * FROM rank_statuses WHERE id = ${RankID}`);
    let rank2 = RankRow.act_max * 2;
    console.log(RankRow.id + "\n" + rank2);

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTitle("Rank: " + RankRow.id)
  //    .attachFile(imagePath)
  //    .setImage("attachment://" + cardRow.id.toString() + "_character.png")
  //    .setThumbnail("attachment://" + cardRow.id.toString() + ".png")
      .addField("Max XP: ", RankRow.exp_total, true)
      .addField("Max ACT", RankRow.act_max , true)
      .addField("Max ACT (dragon stone refill)", rank2, true)
      .addField("Team Cost Capacity", RankRow.team_cost_capacity + 100, true)
      .addField("Friend Capacity", RankRow.friends_capacity, true)
      .addField("Rank", RankRow.id, true)
    message.channel.send({
      embed
    });
  }


}


module.exports.help = {
  name: "rank"
}
