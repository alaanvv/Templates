const { Collection } = require('discord.js')
require('dotenv').config()

const config = process.env

module.exports = bot => {
  bot.once('ready', bot => { console.log(`Bot running as ${bot.user.tag}`) })
  require('./error')
  
  // Bot Variables
  bot.token = config.token
  bot.prefix = config.prefix

  bot.commands = new Collection()
  bot.aliases = new Collection()

  bot.utils = {}

  require('./utils')(bot)

  // Command System
  Array('handle.js', 'loadCommands.js')
    .forEach(file => require(`./command-system/${file}`)(bot))
}