exports.code = function(){
const { Client, Attachment } = require('discord.js');

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
client.setMaxListeners(0)




client.on('message', message => {

if(message.content.startsWith("/test")){
var challonge = require('challonge')
message.reply(challonge('wgamhen5', {subdomain: '', theme: '1', multiplier: '1.0', match_width_multiplier: '1.0', show_final_results: '0', show_standings: '0'}));

}



});
  
  
  
  
//________________Dont touch Zone start
}
//________________Dont touch Zone end
