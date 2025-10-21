const file = require("fs");

// Dosya oluşturma
file.writeFile("ornek.txt", "Merhaba Dünya! Fatma", (err) => {
  if (err) throw err;
  console.log("Dosya oluşturuldu!");
});

// Dosyayı okuma
file.readFile("ornek.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Dosya içeriği:", data);
});


