function nambah(a, b) {
  return a + b;
}

export default {
  command: "nambah ",
  category: "learn",

  execute(m) {
    let angka1 = m.args[0];
    let angka2 = m.args[1];
    let hasil = nambah(angka1, angka2);

    m.reply(`Hasil: ${hasil}`);
  },
};
