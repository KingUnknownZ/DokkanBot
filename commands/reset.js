const sql = require("sqlite");
const Discord = require("discord.js");
var fs = require('fs'),
gm = require('gm').subClass({imageMagick: true});
var sleep = require('sleep');
module.exports.run = (client, message, args) => {
  var cardID = args;
  var cardart;

  if(cardID.charAt(6) === '1'){
     cardart = cardID - 1;
  } else {
     cardart = cardID;
  };

  var card = './images/' + cardart + '.cpk_unpacked/card_' + cardart + '.png';



  let bg = './images/' + cardart + '.cpk_unpacked/card_' + cardart + '_bg.png';
  let effect = './images/' + cardart + '.cpk_unpacked/card_' + cardart + '_effect.png';
  let character = './images/' + cardart + '.cpk_unpacked/card_' + cardart + '_character.png';


  if(!fs.existsSync('./images/' + cardart + '.cpk_unpacked'))  {
    message.channel.send(cardart + " was not found")
    return;
    }

  if(fs.existsSync(card))  {
    fs.unlinkSync(card);
  };

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

message.channel.sendFile(card, cardart + ".png", 'Card art has been reset!');

}


module.exports.help = {
  name: "reset"
}
