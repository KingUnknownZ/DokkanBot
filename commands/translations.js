const sql = require("sqlite");
var sleep = require('sleep');
var card = require('./jp')
const translate = require('google-translate-api');
module.exports.run = (client, message, args) => {
  sql.open("./japan.db");
console.log(card.card)
var cardID = card.card;

getCard(message, args[0]);

    async function getCard(message) {
    let cardRow = await sql.get(`SELECT * FROM cards WHERE id = ${cardID}`);
    if (!cardRow) return;

    if (cardRow.leader_skill_id != null) {
    let leaderRow = await sql.get(
      `SELECT * FROM leader_skills WHERE id = ${cardRow.leader_skill_id}`
    );
    if (cardRow.name != null){
      translate(cardRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET name = '${res.text}' WHERE id = 1;`);})
    }
    translate(leaderRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET leader_skill_name = '${res.text}' WHERE id = 1;`);})
    translate(leaderRow.description, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET leader_skill_description = '${res.text}' WHERE id = 1;`)});
  }
  if (cardRow.passive_skill_set_id != null) {
    let passiveRow = await sql.get(
      `SELECT * FROM passive_skill_sets WHERE id = ${cardRow.passive_skill_set_id}`
    );
    translate(passiveRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET passive_skill_name = '${res.text}' WHERE id = 1;`)})
    translate(passiveRow.description, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET passive_skill_description = '${res.text}' WHERE id = 1;`)})
}


    if (cardRow.link_skill1_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill1_id}`
      );
      translate(linkRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill1_name = '${res.text}' WHERE id = 1;`)})
      translate(linkRow.description, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill1_description = '${res.text}' WHERE id = 1;`)})
      }

    if (cardRow.link_skill2_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill2_id}`
      );
      translate(linkRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill2_name = '${res.text}' WHERE id = 1;`)})
      translate(linkRow.description, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill2_description = '${res.text}' WHERE id = 1;`)})
    }

    if (cardRow.link_skill3_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill3_id}`
      );
      translate(linkRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill3_name = '${res.text}' WHERE id = 1;`)})
      translate(linkRow.description, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill3_description = '${res.text}' WHERE id = 1;`)})
        }

    if (cardRow.link_skill4_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill4_id}`
      );
      translate(linkRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill4_name = '${res.text}' WHERE id = 1;`)})
      translate(linkRow.description, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill4_description = '${res.text}' WHERE id = 1;`)})
        }

    if (cardRow.link_skill5_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill5_id}`
      );
      translate(linkRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill5_name = '${res.text}' WHERE id = 1;`)})
      translate(linkRow.description, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill5_description = '${res.text}' WHERE id = 1;`)})
        }

    if (cardRow.link_skill6_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill6_id}`
      );
      translate(linkRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill6_name = '${res.text}' WHERE id = 1;`)})
      translate(linkRow.description, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill6_description = '${res.text}' WHERE id = 1;`)})
      }
    if (cardRow.link_skill7_id != null) {
      let linkRow = await sql.get(
        `SELECT * FROM link_skills WHERE id = ${cardRow.link_skill7_id}`
      );
      translate(linkRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill7_name = '${res.text}' WHERE id = 1;`)})
      translate(linkRow.description, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET link_skill7_description = '${res.text}' WHERE id = 1;`)})
      }
      if (cardRow.id != null) {
      let SuperRow = await sql.get(
        `SELECT * FROM card_specials WHERE card_id = ${cardRow.id}`
      );
      let Super1Row = await sql.get(
        `SELECT * FROM specials WHERE id = ${SuperRow.special_id}`
      );
      translate(Super1Row.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET super_name = '${res.text}' WHERE id = 1;`)})
      translate(Super1Row.description, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET super_description = '${res.text}' WHERE id = 1;`)})
  }

  if (cardRow.card_category1_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM card_categories WHERE id = ${cardRow.card_category1_id}`
    );
    translate(CatRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET category1_name = '${res.text}' WHERE id = 1;`)})
  }

  if (cardRow.card_category2_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM card_categories WHERE id = ${cardRow.card_category2_id}`
    );
    translate(CatRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET category2_name = '${res.text}' WHERE id = 1;`)})
  }

  if (cardRow.card_category3_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM card_categories WHERE id = ${cardRow.card_category3_id}`
    );
    translate(CatRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET category3_name = '${res.text}' WHERE id = 1;`)})
  }

  if (cardRow.card_category4_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM card_categories WHERE id = ${cardRow.card_category4_id}`
    );
    translate(CatRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET category4_name = '${res.text}' WHERE id = 1;`)})

  }

  if (cardRow.card_category5_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM card_categories WHERE id = ${cardRow.card_category5_id}`
    );
    translate(CatRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET category5_name = '${res.text}' WHERE id = 1;`)})

  }

  if (cardRow.card_category6_id != null) {
    let CatRow = await sql.get(
      `SELECT * FROM card_categories WHERE id = ${cardRow.card_category6_id}`
    );
    translate(CatRow.name, {from: 'ja', to: 'en'}).then(res => {sql.run(`UPDATE temp SET category6_name = '${res.text}' WHERE id = 1;`)})
  }


  }



}

module.exports.help = {
  name: "translations"
}
