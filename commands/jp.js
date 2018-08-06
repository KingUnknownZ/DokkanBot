const sql = require("sqlite");
var fs = require('fs');
const sleep = require('sleep');
module.exports.run = (client, message, args) => {
  var cardID = 'Vegeta';
  exports.card = cardID;
//  if (cmd)   cmd.run(client, message, args);
//  if (cmds)   cmds.run(client, message, args);
  let asyncTest = () => {
    let translate = client.commands.get('translations'.toLowerCase());
    let card = client.commands.get('card'.toLowerCase());
    let create = client.commands.get('create'.toLowerCase());
    let destroy = client.commands.get('destroy'.toLowerCase());
    create.run(client, message, args)

    setTimeout(() => translate.run(client, message, args), 1000);
    setTimeout(() => card.run(client, message, args), 2000);
  //  setTimeout(() => destroy.run(client, message, args), 3000);
    setTimeout(() => reload.run(client, message, args), 5000);
}
asyncTest();
}

module.exports.help = {
  name: "jp"
}
