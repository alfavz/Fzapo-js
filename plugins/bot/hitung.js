export default {
  command: "hitung",
  category: "bot",

  execute(m) {
    let angka = parseInt(m.args[0]);

    if (!m.args[0]) {
      m.reply("selain 0 mas ayo-_");
    } else {
      m.reply(`Hasil: ${angka * 4}`);
    }
  },
};
