var Discord = require("discord.js");
var client = new Discord.Client();

client.on("message", msg => {

  // Set the prefix
  let prefix = "!";
  var duel = 0;
  var cellcapture = 0;
  var cars = [];
  var duelcont = [];
  // Exit and stop if it's not there
  if(!msg.content.startsWith(prefix)) return;
  
  if(msg.author.bot) return;  
  // [rest of the code]

  if (msg.content.startsWith(prefix + "ping")) {
    msg.channel.sendMessage("pong!");
  } 

  else if (msg.content.startsWith(prefix + "pro")) {
    msg.channel.sendMessage("", {embed: {
  color: 3447003,
  description: "@Duel " + duel + " Player(s) Needed for Duel"
       }});
  }
  else if (msg.content.startsWith(prefix + "j")) {
	$duel++;
    let args = message.content.split(" ").slice(1);
	let server = args[0];
    msg.channel.sendMessage("Player ${message.author.name} joined ${server} (${duel}/2)");
	if (duel == 2){
		$duel = 0;
	toxikkbot.createTemporaryChannelName = ("Duel ${message.author.name}");
	}
   }
  }
  
  );

client.on('ready', () => {
  console.log('I am ready!');
});

client.login("AHAA!SECRET BITCH");