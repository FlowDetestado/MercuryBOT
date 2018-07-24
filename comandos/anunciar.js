const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
    message.delete().catch(O_o=>{});
if (message.member.hasPermission('MANAGE_GUILD')) {  
               
    let mensg = args.join(" ");
    if(!mensg)
       return message.channel.send("Digite a msg do aviso!")
       
       const anuncio = new Discord.RichEmbed()
       .setColor("0cff00")
       .setAuthor("Anúncio", "https://cdn.discordapp.com/emojis/460264772869554176.gif")
       
       .setDescription(mensg)
       
       .setTimestamp()
       .setFooter(`Por: ${message.author.tag}`, message.author.avatarURL)
    
    message.channel.send("@everyone", anuncio)
}
}