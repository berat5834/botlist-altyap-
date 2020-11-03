const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var PREFIX = ayarlar.prefix
const db = require ('quick.db')
exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
.setColor('RED')
.setTitle('Settings » Komutlar')
.setTimestamp()
.addField(`• ${PREFIX}botekle **<botID> <prefix>**`,`Bot başvurursunuz.`)
.addField(`• ${PREFIX}yetkili`,`Yetkili yardm menüsünü atar.`)
.setFooter('© 2020  Settings')
.setTimestamp()
message.channel.send(embed)
};

 //youtube.com/linlords
//teşekkürler AloneDesign

//linlordscode.com

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardim','komutlar'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};
