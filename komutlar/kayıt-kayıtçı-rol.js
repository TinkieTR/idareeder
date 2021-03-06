const discord = require('discord.js')
const db = require('quick.db')
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:noo:750777134548516874> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Kayıtçı rol sıfırlama komutu.`)
.setColor('#6a00ff')
.setDescription(`<a:siren:778777832976416778> Sunucu için ayarladığınız kayıtçı rol başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
message.channel.send(sıfırlandı)
db.delete(`kayıtçırol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kayıtçı rol ayarlama komutu.`)
.setColor('#6a00ff')
.setDescription(`<a:noo:750777134548516874> Ayarlayacağınız kayıtçı rolü belirtiniz!`)
.setThumbnail(client.user.avatarUR())
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
message.channel.send(ayarlanmadı)
}
db.set(`kayıtçırol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Kayıtçı rol ayarlama komutu.`)
.setColor('#6a00ff')
.setDescription(`<a:syes1:751896954182697051> Kayıt edecek rol başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL)
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
message.channel.send(ayarlandı)
  
}

exports.config = {
  name: 'kayıtçı-rol',
  aliases:[]
}