exports.code = function(){ 
            if (message.content.toLowerCase() === 'turretbunker') { 
              if(message.author.bot) return; 
              message.channel.send(TurretBunker); 
              }
	  });
const TurretBunker = new Discord.MessageEmbed() 
   .setColor('#1500f7') 
   .setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png') 
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .attachFiles(['./resources/TurretBunker.png']) 
   .setImage('attachment://TurretBunker.png') 
   .setTitle(' Bunker Turret') 
   .setDescription(' - Heavily reenforced bunker\n- Ground attack only\n- Decent attack range\n- Upgradeable') 
   .addField('Stats') 
   .addField('Price:  6000')
   .addField('Health:  4500')
   .addField('Build Speed:  0.00025')
   .addField('Price:   6000')
   .addField('Build Speed:  48.8s')
   .addField('Range:  280')
   .addField('Direct Damage:  0 #no directDamage with targetGround')
   .addField('Area Damage:  185')
   .addField('Direct Damage:  0 #no directDamage with targetGround')
   .addField('Area Damage:  170')
   .addField('Move Speed:  0')
   .addField('Turn Speed:  0')
   .setTimestamp() 
   .setFooter('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128'); 
}