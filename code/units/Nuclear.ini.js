exports.code = function(){ 
            if (message.content.toLowerCase() === 'nucleardrone') { 
              if(message.author.bot) return; 
              message.channel.send(NuclearDrone); 
              }
	  });
const NuclearDrone = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/NuclearDrone.png']) 
   .setImage('attachment://NuclearDrone.png') 
   .setTitle(' Nuclear Drone') 
   .setDescription(' -Nuclear drone, an unmanned shuttle that has 50T nuclear warhead inside of its hull.\n- Easy to destroy\n- Good for air spam control\n- Can only have 2 built at a time.\n- Bruh.') 
   .addField('Stats') 
   .addField('Price:  28000, uranium=500')
   .addField('Health:  250')
   .addField('Build Speed:  21.3s')
   .addField('Range:  9')
   .addField('Direct Damage:  0')
   .addField('Area Damage:  2200')
   .addField('Move Speed:  1.75')
   .addField('Turn Speed:  2.5')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}