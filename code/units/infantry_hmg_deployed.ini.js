exports.code = function(){ 
            if (message.content.toLowerCase() === 'hmgdeployed') { 
              if(message.author.bot) return; 
              message.channel.send(hmgDeployed); 
              }
	  });
const hmgDeployed = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/hmgDeployed.png']) 
   .setImage('attachment://hmgDeployed.png') 
   .setTitle(' Machine-gunner [Prone]') 
   .setDescription(' -Moderately armored infantry\n-Machine gun with deployable bipod\n-Damage taken and speed is reduced when prone') 
   .addField('Stats') 
   .addField('Price:  500')
   .addField('Health:  200')
   .addField('Build Speed:  0.0025')
   .addField('Price:   0')
   .addField('Build Speed:  0.015')
   .addField('Range:  250')
   .addField('Direct Damage:  5')
   .addField('Area Damage:  6')
   .addField('Move Speed:  0.2')
   .addField('Turn Speed:  0.75')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}