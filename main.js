const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const sql = require("sqlite");
const fs = require("fs");

sql.open("./global.db");

client.login(config.token);
let prefix = config.prefix;
client.on("ready", () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection()


fs.readdir('./commands/', (error, files) => {
  if (error) console.error(error)
  console.log(`Loading a total of ${files.length} commands.`)
  files.forEach(commands => {
		if(commands.split(".").slice(-1)[0] !== "js") return;
    let props = require(`./commands/${commands}`)
    console.log(`Loading command: ${props.help.name}.`)
    client.commands.set(props.help.name, props)
  })
})

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
 let VC= newMember.guild.roles.get("463354506516627456");


  if(oldUserChannel === undefined && newUserChannel !== undefined) {

    newMember.addRole(VC);

  } else if(newUserChannel === undefined){
	      newMember.removeRole(VC);
	  }
})

client.on("message", async(message) => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;
	let guild = message.guild;
	let args = message.content.split(" ").slice(1).join(" ");
	let command = message.content.split(" ")[0];
	if(!command.startsWith(prefix)) return;

	let cmd = client.commands.get(command.slice(prefix.length).toLowerCase());
	if (cmd)
		cmd.run(client, message, args);
});
