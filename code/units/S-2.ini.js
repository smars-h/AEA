exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 's2') { 
              if(message.author.bot) return; 
              message.channel.send(S2); 
	          }
	  });
const S2 = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/S2.png']) 
   //.setImage('attachment://S2.png') 
   .addField('Price:  3350','__________________')
   .addField('Health:  575','__________________')
   .setTitle(' S-2') 
   .setDescription('- 6 Pick-up slots.\n- Cant attack.') 
   .addField('Stats','__________________') 
   .addField('Range:  9','__________________')
   .addField('Direct Damage:  250','__________________')
   .addField('Move Speed:  1.5','__________________')
   .addField('Turn Speed:  1.5','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
