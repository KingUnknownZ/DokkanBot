const sql = require("sqlite");
const Discord = require("discord.js");
var fs = require('fs'),
gm = require('gm').subClass({imageMagick: true});
var sleep = require('sleep');
module.exports.run = (client, message, args) => {
  let cardart = '';
  var cardID = args;
  sql.open("./global.db");
  getCard(message, args[0]);

  console.log(cardID)


  async function getCard(message) {
    if(isNaN(cardID)){
    let cardName = await sql.get(`SELECT * FROM name WHERE id = ${cardID}`);
    let cardRow = await sql.get(`SELECT * FROM cards WHERE id = ${cardName.id}`);
    } else {
    let cardRow = await sql.get(`SELECT * FROM cards WHERE id = ${cardID}`);
  }
    if (!cardRow) return message.reply("No card found with that ID");
    let Cat = await(sql.get(`SELECT * FROM card_categories ORDER BY id DESC LIMIT 1`));
    //console.log(cardRow);
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

//    let imagePath = "./images/" + cardRow.id.toString() + ".png";
    if (cardRow.leader_skill_id != null) {
      let leaderRow = await sql.get(
        `SELECT * FROM leader_skills WHERE id = ${cardRow.leader_skill_id}`
      );
      leaderSkill = leaderRow.name + ": " + leaderRow.description;
    }
    if (cardRow.passive_skill_set_id != null) {
      let passiveRow = await sql.get(
        `SELECT * FROM passive_skill_sets WHERE id = ${cardRow.passive_skill_set_id}`
      );
      passiveSkill = passiveRow.name + ": " + passiveRow.description;
    }
      if (cardRow.link_skill1_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill1_id}`
      );
      linkSkill = linkRow.name + ": " + linkRow.description;
    }

    if (cardRow.link_skill2_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill2_id}`
      );
      linkSkill2 = linkRow.name + ": " + linkRow.description;
    }

    if (cardRow.link_skill3_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill3_id}`
      );
      linkSkill3 = linkRow.name + ": " + linkRow.description;
    }

    if (cardRow.link_skill4_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill4_id}`
      );
      linkSkill4 = linkRow.name + ": " + linkRow.description;
    }

    if (cardRow.link_skill5_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill5_id}`
      );
      linkSkill5 = linkRow.name + ": " + linkRow.description;
    }

    if (cardRow.link_skill6_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill6_id}`
      );
      linkSkill6 = linkRow.name + ": " + linkRow.description;
    }
    if (cardRow.link_skill7_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill7_id}`
      );
      linkSkill7 = linkRow.name + ": " + linkRow.description;
    }
    if (cardRow.id != null) {
      let SuperRow = await sql.get(
        `SELECT * FROM card_specials WHERE card_id = ${cardRow.id}`
      );
      let Super1Row = await sql.get(
        `SELECT * FROM specials WHERE id = ${SuperRow.special_id}`
      );
      superAttack = Super1Row.name + ": " + Super1Row.description;
  }

 if (cardRow.card_category1_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM card_categories WHERE id = ${cardRow.card_category1_id}`
    );
    Category = CatRow.name;
  }
      if (cardRow.card_category2_id != null) {
     let CatRow = await sql.get(
       `SELECT * FROM card_categories WHERE id = ${cardRow.card_category2_id}`
     );
     Category2 = CatRow.name;
   }
  if (cardRow.card_category3_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM card_categories WHERE id = ${cardRow.card_category3_id}`
    );
    Category3 = CatRow.name;
  }

  if (cardRow.card_category4_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM card_categories WHERE id = ${cardRow.card_category4_id}`
    );
    Category4 = CatRow.name;

  }

  if (cardRow.card_category5_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM card_categories WHERE id = ${cardRow.card_category5_id}`
    );
    Category5 = CatRow.name;

  }

  if (cardRow.card_category6_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM card_categories WHERE id = ${cardRow.card_category6_id}`
    );
    Category6 = CatRow.name;
  }

  let str = cardRow.name;
  const REGEX_JAPANESE = /[\u3000-\u303f]|[\u3040-\u309f]|[\u30a0-\u30ff]|[\uff00-\uff9f]|[\u4e00-\u9faf]|[\u3400-\u4dbf]/;
    const hasJapanese = (str) => REGEX_JAPANESE.test(str);
    if(hasJapanese){
      console.log('RACISTS')
    }

  if(cardID.charAt(6) === '1'){
    //console.log("Card is awakened");
    var cardart = cardID - 1;
  } else {
    //console.log('Card is not awakened');
    var cardart = cardID;
  };

  if(!fs.existsSync('./images/' + cardart + '.cpk_unpacked'))  {
      var cardart = '0000000';
  }

  let bg = './images/' + cardart + '.cpk_unpacked/card_' + cardart + '_bg.png';
  let effect = './images/' + cardart + '.cpk_unpacked/card_' + cardart + '_effect.png';
  let character = './images/' + cardart + '.cpk_unpacked/card_' + cardart + '_character.png';

  //console.log(cardart)





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
console.log(cardRow)
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTitle(cardRow.name)
      .attachFile(card)
      .setImage("attachment://" + card)
      .setThumbnail("attachment://" + card)
      .addField("Name", cardRow.name, true)
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
  name: "glb"
}
