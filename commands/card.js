const sql = require("sqlite");
var card = require('./jp');
var fs = require('fs');
const Discord = require("discord.js");
gm = require('gm').subClass({imageMagick: true});
var sleep = require('sleep');
const SQLite = require("better-sqlite3");
const lite = new SQLite('./japan.db');
module.exports.run = (client, message, args) => {
  var cardID = card.card;

  getCard(message, args[0]);

  sql.open("./japan.db");

  async function getCard(message) {

    let cardRow = await sql.get(`SELECT * FROM cards WHERE id = ${cardID};`);
    if (!cardRow) return message.reply("No card found with that ID");
    let leaderSkill = "none";
    let passiveSkill = "none";
    let linkSkill = "none";
    let linkSkill2 = "none";
    let linkSkill3 = "none";
    let linkSkill4 = "none";
    let linkSkill5 = "none";
    let linkSkill6 = "none";
    let linkSkill7 = "none";
    let superAttack = "none";
    let Category = "none";
    let Category2 = "none";
    let Category3 = "none";
    let Category4 = "none";
    let Category5 = "none";
    let Category6 = "none";


    if (cardRow.leader_skill_id != null) {

      let lead = await sql.get(`SELECT * FROM temp WHERE id = 1;`);
           leaderSkill = lead.leader_skill_name  + ": " + lead.leader_skill_description;
    }
    if (cardRow.passive_skill_set_id != null) {

      let passive = await sql.get(`SELECT * FROM temp WHERE id = 1;`);
      passiveSkill = passive.passive_skill_name  + ": " + passive.passive_skill_description;
    }
    if (cardRow.link_skill1_id != null) {
      let linkRow = await sql.get(`SELECT * FROM temp WHERE id = 1;`);
    //  console.log(linkRow)
      linkSkill = linkRow.link_skill1_name + ": " + linkRow.link_skill1_description;
    }

    if (cardRow.link_skill2_id != null) {
      let linkRow = await sql.get(`SELECT * FROM temp WHERE id = 1;`);
    //  console.log(linkRow)
      linkSkill2 = linkRow.link_skill2_name + ": " + linkRow.link_skill2_description;
    }

    if (cardRow.link_skill3_id != null) {
      let linkRow = await sql.get(`SELECT * FROM temp WHERE id = 1;`);

      linkSkill3 = linkRow.link_skill3_name + ": " + linkRow.link_skill3_description;
    }

    if (cardRow.link_skill4_id != null) {
      let linkRow = await sql.get(`SELECT * FROM temp WHERE id = 1;`);

      linkSkill4 = linkRow.link_skill4_name + ": " + linkRow.link_skill4_description;
    }

    if (cardRow.link_skill5_id != null) {
      let linkRow = await sql.get(`SELECT * FROM temp WHERE id = 1;`);

      linkSkill5 = linkRow.link_skill5_name + ": " + linkRow.link_skill5_description;
    }

    if (cardRow.link_skill6_id != null) {
      let linkRow = await sql.get(`SELECT * FROM temp WHERE id = 1;`);

      linkSkill6 = linkRow.link_skill6_name + ": " + linkRow.link_skill6_description;
    }

    if (cardRow.link_skill7_id != null) {
      let linkRow = await sql.get(`SELECT * FROM temp WHERE id = 1;`);

      linkSkill7 = linkRow.link_skill7_name + ": " + linkRow.link_skill7_description;
    }
    if (cardRow.id != null) {
      let Super1Row = await sql.get(
        `SELECT * FROM temp WHERE id = 1`
      );
      superAttack = Super1Row.super_name + ": " + Super1Row.super_description;
  }

  if (cardRow.card_category1_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM temp WHERE id = 1`
    );
    Category = CatRow.category1_name;
  }

  if (cardRow.card_category2_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM temp WHERE id = 1`
    );
    Category2 = CatRow.category2_name;
  }

  if (cardRow.card_category3_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM temp WHERE id = 1`
    );
    Category3 = CatRow.category3_name;
  }

  if (cardRow.card_category4_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM temp WHERE id = 1`
    );
    Category4 = CatRow.category4_name;

  }

  if (cardRow.card_category5_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM temp WHERE id = 1`
    );
    Category5 = CatRow.category5_name;

  }

  if (cardRow.card_category6_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM temp WHERE id = 1`
    );
    Category6 = CatRow.category6_name;
  }

  if (cardRow.name != null) {
    let cardName = await sql.get(`SELECT * FROM temp WHERE id = 1;`);
    Card = cardName.name;
  }

  if(cardID.charAt(6) === '1'){
     cardart = cardID - 1;
  } else {
     cardart = cardID;
  };

  if(!fs.existsSync('./images/' + cardart + '.cpk_unpacked'))  {
      var cardart = '0000000';
  }

  let bg = './images/' + cardart + '.cpk_unpacked/card_' + cardart + '_bg.png';
  let effect = './images/' + cardart + '.cpk_unpacked/card_' + cardart + '_effect.png';
  let character = './images/' + cardart + '.cpk_unpacked/card_' + cardart + '_character.png';






  if(!fs.existsSync('./images/' + cardart + '.cpk_unpacked/card_' + cardart + '.png') && fs.existsSync('./images/' + cardart + '.cpk_unpacked')) {

  let card = './images/' + cardart + '.cpk_unpacked/card_' + cardart + '.png';


  if(!fs.existsSync(effect)){
  let effect = bg;

  gm(bg)
  .composite(effect)
  .write(card, function(err) {
      if(err) console.log(err);
      if(!err) console.log("Written composite file")
  })

  sleep.sleep(1);

  gm(card)
    .composite(character)
    .resize(400, 533)
    .write(card, function(err) {
        if(err) console.log(err);
        if(!err) console.log("Written composite file")
  });
  }
    gm(bg)
    .composite(effect)
    .write(card, function(err) {
        if(err) console.log(err);
        if(!err) console.log("Written composite file")
    })

  sleep.sleep(1);

    gm(card)
      .composite(character)
      .resize(400, 533)
      .write(card, function(err) {
          if(err) console.log(err);
          if(!err) console.log("Written composite file")
    });

    sleep.sleep(1);
  } else {};

  let card = './images/' + cardart + '.cpk_unpacked/card_' + cardart + '.png';

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTitle(Card)
      .attachFile(card)
      .setImage("attachment://" + card)
      .setThumbnail("attachment://" + card)
      .addField("ID", cardRow.id, true)
      .addField("Rarity", parseRarity(cardRow.rarity), true)
      .addField("Type", parseType(cardRow.element), true)
      .addField("Leader Skill", leaderSkill, true)
      .addField("Passive", passiveSkill, true)
      .addField("Super", superAttack, true)
      .addField("Link 1", linkSkill, true)
      .addField("Link 2", linkSkill2, true)
      .addField("Link 3", linkSkill3, true)
      .addField("Link 4", linkSkill4, true)
      .addField("Link 5", linkSkill5, true)
      .addField("Link 6", linkSkill6, true)
      .addField("Link 7", linkSkill7, true)
      .addField("Category 1", Category, true)
      .addField("Category 2", Category2, true)
      .addField("Category 3", Category3, true)
      .addField("Category 4", Category4, true)
      .addField("Category 5", Category5, true)
      .addField("Category 6", Category6, true)
      .addField(
        "Minimum Stats",
        `${cardRow.hp_init}/${cardRow.atk_init}/${cardRow.def_init}`,
        true
      )
      .addField(
        "Maximum Stats",
        `${cardRow.hp_max}/${cardRow.atk_max}/${cardRow.def_max}`,
        true
      );
    message.channel.send({
      embed
    });
    var linkRow = await sql.get(`SELECT * FROM temp WHERE id = 1`);
        console.log(linkRow)
  }

  function parseRarity(num) {
    switch (num) {
      case 0:
        return "N";
      case 1:
        return "R";
      case 2:
        return "SR";
      case 3:
        return "SSR";
      case 4:
        return "UR";
      case 5:
        return "LR";
    }
  }

  function parseType(num) {
    switch (num) {
      case 0:
        return "AGL";
      case 1:
        return "TEQ";
      case 2:
        return "INT";
      case 3:
        return "STR";
      case 4:
        return "PHY";
      case 10:
        return "Super AGL";
      case 11:
        return "Super TEQ";
      case 12:
        return "Super INT";
      case 13:
        return "Super STR";
      case 14:
        return "Super PHY";
        case 20:
          return "Extreme AGL";
        case 21:
          return "Extreme TEQ";
        case 22:
          return "Extreme INT";
        case 23:
          return "Extreme STR";
        case 24:
          return "Extreme PHY";
    }
  }


}

module.exports.help = {
  name: "card"
}
