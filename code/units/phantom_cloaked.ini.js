exports.code = function(){ 
            if (message.content.toLowerCase() === 'phantomcloaked') { 
              if(message.author.bot) return; 
              message.channel.send(phantomCloaked); 
              }
	  });
const phantomCloaked = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/phantomCloaked.png']) 
   .setImage('attachment://phantomCloaked.png') 
   .setTitle(' Ghost [Cloaked]') 
   .addField('Price:  1800')
   .addField('Health:  150')
   .addField('Build Speed:  33.3s')
   .addField('Build Speed:  0s')
   .addField('Price:  0')
   .addField('Build Speed:  0s')
   .addField('Price:  0')
   .addField('Range:  250')
   .addField('Move Speed:  1.5')
   .addField('Turn Speed:  3.75')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}