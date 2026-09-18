export default {
  command: "sapa",
  category: "bot",
  execute(m) {
    let now = new Date();
    let jam = now.getHours();
    if (jam < 12) {
      m.reply(`selamat Pagi, ${m.pushName}`);
    } else if (jam < 18) {
      m.reply(`selamat siang mas ${m.pushName}`);
    } else {
      m.reply(`met malam wahai ${m.pushName}`);
    }
  },
};
