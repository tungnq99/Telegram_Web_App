const { Telegraf } = require("telegraf");
const TOKEN = "6470705029:AAG195byQyfzCRIdpSUfLrpxRAzkI5jl6M0";
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
