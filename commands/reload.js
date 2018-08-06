const {promisify} = require("util");
const write = promisify(require("fs").writeFile);
exports.run = async (client, message, args) => {
  await message.channel.send("Rebooting...");
  await write('./reboot.json', `{"id": "${message.id}", "channel": "${message.channel.id}"}`).catch(console.error);
  const commandUnloads = client.commands.filter(c=>!!c.db).array();
  for(const c of commandUnloads) {
    await c.db.close();
  }
  process.exit(1);
};



exports.help = {
  name: 'reload',
  description: 'Restarts bot and indicates the reboot time.',
  usage: 'reboot'
};
