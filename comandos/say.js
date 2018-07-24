const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
    message.delete().catch(O_o=>{});
if (message.member.hasPermission('MANAGE_GUILD')) {  
               
    let mensg = args.join(" ");
    if(!mensg)
    message.channel.send(mensg)

}
}