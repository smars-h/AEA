exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'plasmasniper') { 
              if(message.author.bot) return; 
              message.channel.send(plasmaSniper); 
	          }
	  });
const plasmaSniper = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/plasmaSniper.png']) 
   //.setImage('attachment://plasmaSniper.png') 
   .setTitle(' Plasma Sniper') 
   .setDescription(' - Long range ground attack\n- Very weak armour with light shield\n- Can only hit ground\n- Reduced damage to buildings') 
   .addField('Stats','__________________') 
   .addField('Price:  1000','__________________')
   .addField('Health:  50','__________________')
   .addField('Shield:  100','__________________')
   .addField('Range:  300','__________________')
   .addField('Direct Damage:  55','__________________')
   .addField('Move Speed:  0.8','__________________')
   .addField('Turn Speed:  3.4','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
