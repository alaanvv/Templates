module.exports = bot => {
  bot.on('messageCreate', async message => {  
    if (!message.guild || message.author.bot) return
  
    const args = message.content.slice(bot.prefix.length).trim().split(' ')
    const query = args.shift().toLowerCase()
    
    const command = bot.commands.get(query) || bot.commands.get(bot.aliases.get(query))
  
    command.run(bot, message, args)
  })
}
