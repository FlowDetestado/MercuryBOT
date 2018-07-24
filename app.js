console.log('Conectando...');
const Discord = require('discord.js');
const client = new Discord.Client();
const preferencias = require('./config.json');
const prefix = preferencias.prefix;
const prefixow = preferencias.prefixow;
const fs = require('fs');
var comandos = new Discord.Collection();

client.login(process.env.MercuryTOKEN);


client.on('ready', () =>{
console.log('\n==============================');
console.log('CONECTADO! BOT ONLINE!');
console.log(`O meu prefixo � ${prefix}`);
console.log('==============================');


});

client.on("error", e => console.log(e));

;

client.on("guildMemberAdd", member =>{
  if(member.guild.id === "405795593919660033"){
    client.channels.get("411254607491104768").send(`:point_right: ${member} Foi puxado para ScreenShare!`)
    const join = new Discord.RichEmbed()
    .setAuthor("Mercury SHOP")
    .setColor("#36393f")
    .setDescription("Opa, tudo bem? você quer aprender a telar? com GC's bons e de qualidade? bom, lhe apresento a mercury, melhor loja de screenshare que existe, Aulas com o GC-Detector Nervoso.\n\n\n**PACOTES**\n\n\n✪✪✪✪ __Pacote Star__ ✪✪✪✪\n\n*R$20,00\n\nAcesso à strings dos mais conhecidos clients pagos, gratuitos, crackeados e\ntambém publicados na internet.\nDetectar Java Edits, suas .class e também determinar pelos kb’s dos mods qual\nmod é legit ou que contém alteração.\nDetecção de AutoClickers básicos.\nAulas em chamada para que tudo seja explicado corretamente.\nMétodos comuns e eficazes de detectar Clients.\n\n✬✬✬✬ __Pacote Vacuum__ ✬✬✬✬\n\n*R$40,00*\n\nStrings dos Clients Publicados na Internet e que muitos utilizam atualmente\nStrings de Clients Pagos\nDetectar Auto Clickers de todos os tipos (.exe & .jar)\nDetectar a maioria programas que são utilizados para Bypass\nMétodos diferenciados para não tomar Bypass\nAulas em chamada para que tudo seja explicado\nMétodos diferenciados de detectar alguns Clients\Receber o programa da  Mercury Screenshare.\n\n :star_of_david::star_of_david::star_of_david::star_of_david: __Pacote Mercury__ :star_of_david::star_of_david::star_of_david::star_of_david:\n\n__R$80,00__\n\nRemovedor de String\nMétodos do básico até o avançado\nPrograma de Screenshare Privado da Mercury\natualização diárias\nMétodos para clients pagos e privados Detecção avançada de Clients Pagos\nDetecção avançada de Mods Java Edit/Cheats\nProgramas novos para se utilizar numa ScreenShare\nCada detalhe será dado de cada programa para você\nStrings não conhecidas e funcionais de Clients Pagos\nQuando haver novas Strings e novos métodos será ensinado\nGerador de Strings\n\nAcesse nossa loja: [Clique Aqui](hhtps://loja.mercuryscreenshare.com.br)")
    member.send(join)
  }
  });
  client.on("guildMemberRemove", member =>{
    if(member.guild.id === "405795593919660033"){
      client.channels.get("411254607491104768").send(`:point_left: ${member.user.tag} Deslogou no meio da ScreenShare!`)
    }
    });
client.on('message', message =>{

var autor = message.author;
var msg = message.content.toUpperCase();
var cont = message.content.slice(prefix.lenght).split('');
  
if(message.channel.type === "dm") return;
if(!message.content.startsWith(prefix)) return;
// ban
//if(message.author.id === "244537374258888725" || message.author.id === "244537374258888725") return;
//if(message.author.id === "244537374258888725") return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const allargs = args.join(" ");
  
  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
	  
	  
   } catch (err) {
     
     message.channel.send(`:question: **|** ${message.author} comando inexistente ou não foi feito ainda!`).then(msg => msg.delete(5000));

	   return;
   }
  
});
