const Discord = require("discord.js");
const weather = require(`weather-js`);

module.exports.run = async (client, message, args) =>{

weather.find({search: args.join(' '), degreeType: `C`}, function(err, result) {
    if (err || !result[0]) return message.channel.send(err || 'Essa localização não foi encontrada!')

    var current = result[0].current;
    var location = result[0].location;

    const embed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Clima em ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x00AE86)
        .addField(`Fuso horário:`, `UTC${location.timezone}`, true)
        .addField(`tipo de grau:`, location.degreetype, true)
        .addField(`Temperatura:`, `${current.temperature}°C`, true)
        .addField(`Parece:`, `${current.feelslike}°C`, true)
        .addField(`Ventos`, current.winddisplay, true)
        .addField(`Umidade`, `${current.humidity}%`, true)

        message.channel.send({embed});

    });
}