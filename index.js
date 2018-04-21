const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});



bot.on("ready", async () => {
	
  console.log(`${bot.user.username} adlı bot ${bot.guilds.size} sunucusunda online!`);
  bot.user.setActivity(`athelp - TESTING THIS BOT`, {url: "https://www.twitch.tv/directory/game/Minecraft"});
	

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
var msg = message.content.toUpperCase();
  var sender = message.author;

	

	
	
  if (sender.id === "429357437641031680"){
  	return;
  }
	
	

		
		
  
	if(cmd === `${prefix}pfp`){
	message.channel.send("Autism level: 99999999999999999999", {
    file: "https://pbs.twimg.com/profile_images/704461285535182848/E_mW-3tV_400x400.jpg" // Or replace with FileOptions object
});
	}



	
  if(cmd === `${prefix}help`){


    message.channel.send("Just testing this bot. 'Command are not working'");
    return;
  }
	


	
	if(cmd === `${prefix}del`){
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bunu yapmak için iznin yok!");
			 if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; // number of messages deleted

            // Logging the number of messages deleted on both the channel and console.
            message.channel.sendMessage("Success, Total messages are deleted: "+messagesDeleted);
            console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Error: &del');
            console.log(err);
          });
						 
		
	
						 }
	}






  if(cmd === `${prefix}server`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server")
    .setColor(botconfig.pembe)
    .setThumbnail(sicon)
    .addField("Server Name:", message.guild.name)
    .addField("Created on:", message.guild.createdAt)
    .addField("You are joined on:", message.member.joinedAt)
    .addField("Total autistic users:", message.guild.memberCount);

    return message.channel.send(serverembed);
  }



  if(cmd === `${prefix}bot`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot")
    .setColor(botconfig.pembe)
    .setThumbnail(bicon)
    .addField("Bot name:", bot.user.username)
    .addField("Created on:", bot.user.createdAt)
    .addField("Dev: ", "NoobZombie#5514")
    return message.channel.send(botembed);
  }

});

bot.login(process.env.BOT_TOKEN);
