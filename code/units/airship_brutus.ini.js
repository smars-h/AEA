exports.code = function(){ 
    client.on('message', message => {
            if (message.content.toLowerCase() === 'mothership') { 
              if(message.author.bot) return; 
              message.channel.send(mothership); 
	          }
	  });
const mothership = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://imgur.com/6NICs3U.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   //.attachFiles(['./resources/mothership.png']) 
   //.setImage('attachment://mothership.png') 
   .setTitle(' Mothership') 
   .setDescription(' - Ultimate Dropship\n- Armed with hellfire cannons and missile launchers\n- Built in fabricator\n-Carries 16 Units\n- Goes nuclear on death\n- Can only have 5 built at a time') 
   .addField('Stats','__________________') 
   .addField('Price:  150000, uranium=10000','__________________')
   .addField('Health:  15000','__________________')
   .addField('Range:  320','__________________')
   .addField('Direct Damage:  35','__________________')
   .addField('Area Damage:  85','__________________')
   .addField('Direct Damage:  25','__________________')
   .addField('Area Damage:  25','__________________')
   .addField('Direct Damage:  35','__________________')
   .addField('Area Damage:  55','__________________')
   .addField('Move Speed:  0.65','__________________')
   .addField('Turn Speed:  0.3','__________________')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}
