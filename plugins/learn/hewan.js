export default {
  command: "hewan",
  category: "learn",

  execute(m) {
    let hewans = ["kucing", "tupai", "beruang"];
    let index = Math.floor(Math.random() * 3);
    m.reply(`${index}`);
  },
};
