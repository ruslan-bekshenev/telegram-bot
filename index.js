const TelegramBot = require('node-telegram-bot-api')

const token = '5184487937:AAG8cK5VUVvQeVLIbdrFo9ZB6JiO6zOpRMM'

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/echo (.+)/, (msg, match) => {

	const chatId = msg.chat.id
	const resp = match[1]

	bot.sendMessage(chatId, resp)
})