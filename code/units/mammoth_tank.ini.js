exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'teslatank') { 
              if(message.author.bot) return; 
              message.channel.send(TeslaTank); 
	          }
	  });
const TeslaTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/TeslaTank.png']) 
   //.setImage('attachment://TeslaTank.png') 
   .setDescription(' - Heavy Armour\n- Tesla tech, good against shields\n- Can attack land and air\n- Reduced damage to buildings') 
   .addField('Stats','__________________') 
   .addField('Price:  4200','__________________')
   .addField('Health:  3200','__________________')
   .addField('Health:  2600','__________________')
   .addField('Range:  210 #original','__________________')
   .addField('Range:  220','__________________')
   .addField('Direct Damage:  310','__________________')
   .addField('Direct Damage:  120','__________________')
   .addField('Move Speed:  0.7','__________________')
   .addField('Turn Speed:  1.4','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'specmammothtank') { 
              if(message.author.bot) return; 
              message.channel.send(specMammothTank); 
	          }
	  });
const specMammothTank = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/specMammothTank.png']) 
   //.setImage('attachment://specMammothTank.png') 
   .setTitle(' Apocalypse Tank') 
   .setDescription(' -Very heavily armored\n-Armed with twin cannons and rocket launchers\n-Can attack ground and air\n-Can self-repair') 
   .addField('Stats','__________________') 
   .addField('Price:  7500, uranium=50','__________________')
   .addField('Health:  3200','__________________')
   .addField('Range:  240','__________________')
   .addField('Direct Damage:  135','__________________')
   .addField('Area Damage:  60','__________________')
   .addField('Direct Damage:  35','__________________')
   .addField('Area Damage:  30','__________________')
   .addField('Move Speed:  0.6','__________________')
   .addField('Turn Speed:  1','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
