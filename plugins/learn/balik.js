export default {
  command: "balik",
  category: "learn",

  execute(m) {
    if (!m.args[0]) {
      m.reply("woilah teksnya mana woi");
    } else {
      let balik = m.args.join(" ").split("").reverse().join(""); // untuk membalikkan
      m.reply(`${balik}`);
    }
  },
};
