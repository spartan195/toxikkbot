var Discord = require("discord.js");
var client = new Discord.Client();

client.on("message", msg => {

  // Set the prefix
  let prefix = "!";
  // Exit and stop if it's not there
  if(!msg.content.startsWith(prefix)) return;

  if (msg.content.startsWith(prefix + "ping")) {
    msg.channel.sendMessage("pong!");
  } 

  else if (msg.content.startsWith(prefix + "eloy")) {
    msg.channel.sendMessage("!eloy");
  }
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.login("Mjc1NTU4OTYwMjQzODAyMTEz.C3DJqQ.sVn17_wHmN0iL1manq8VNUtpOOI");