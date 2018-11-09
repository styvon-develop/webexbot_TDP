module.exports = function(controller) {

  // Sends a greeting when the bot joins the chat
  controller.on('bot_space_join', function(bot, message) {

    bot.reply(message, 'I am your everyday academic assistant!');

  });
  
  // Sends a greeting when someone else joins the chat
  controller.on('user_space_join', function(bot, message) {

    bot.reply(message, 'Hello, ' + message.raw_message.data.personDisplayName);

  });
  
  // listen for a message containing the world "hello", and send a reply
  controller.hears(['^hello','^hi'], 'direct_mention,direct_message', function(bot, message) {
    
     bot.reply(message, 'Hey there!');
    
  });


};
