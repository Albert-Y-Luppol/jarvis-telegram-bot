const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end("It works fine!");
  })
  .listen(process.env.PORT || 8080);

const { Telegraf } = require("telegraf");

const bot = new Telegraf("1205181243:AAHQjMdn8dFbJzoeWQFppVd-irqmwEpTuqo");
bot.start((ctx) => ctx.reply("Welcome!"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();
