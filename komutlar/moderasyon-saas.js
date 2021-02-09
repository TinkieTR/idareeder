const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {

  const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  
  if (!args[0]) return message.channel.send(`<a:noo:750777134548516874> Aç yada kapat yazmalısın!! Örnek: **${prefix}sa-as aç**`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('<a:noo:750777134548516874> **Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!**')
 
  if (args[0] === 'aç') {
    
    db.set(`ssaass_${message.guild.id}`, 'acik')
    message.channel.send(`<a:syes1:751896954182697051> **Artık bot Sa diyince As diyecek. Kapatmak için "\`${prefix}sa-as kapat\`" yazmalısın.**`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`ssaass_${message.guild.id}`, 'kapali')
    message.channel.send(`<a:syes1:751896954182697051> **Artık biri sa diyince cevap vermeyecek.**`)

  }
 
}
exports.config = {
  name: 'sa-as',
  aliases: ['sa-as-sistemi']
};
 
