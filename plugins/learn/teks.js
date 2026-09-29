export default {
  command: "teks",
  category: "learn",

  execute(m) {
    if (!m.args[0]) {
      m.reply("Mana teksnya?");
    } else {
      let naik = m.args[0].toUpperCase();
      m.reply(`${naik}`);
    }
  },
};
