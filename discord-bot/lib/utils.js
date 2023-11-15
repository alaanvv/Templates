module.exports = bot => {
  bot.utils.delay = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
} 
