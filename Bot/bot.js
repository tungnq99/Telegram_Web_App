const { Telegraf } = require("telegraf");
const TOKEN = "7128159534:AAG2-VnA91iioIhjKqZq38w3b4e9TxX5EUY";
const bot = new Telegraf(TOKEN);

const web_link = "https://telegram-web-app-ebon.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Hello, I am a bot", {
    reply_markup: {
      keyboard: [[{ text: "Play Game", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
