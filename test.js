var express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello my world!');
});

app.get('/me', (req, res) => {
  res.send('Hello ME <3');
});

let urunler = [
  {
    id: 1,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "/Users/macellan/Downloads/Iphone 14 pro 1 (9).png",
    url: "products/"
  }
];

app.get("/products", (req, res) => {
  let id = req.query.id;
  let name = req.query.name;

  if (id) {
    let urun = urunler.find((u) => u.id == id);
    res.send(urun);
  }

  if (name) {
    let filtrelenmisUrunler = urunler.filter((u) =>
      u.name.toLowerCase().includes(name.toLowerCase())
    );
res.send(filtrelenmisUrunler);
  }
  res.send(JSON.stringify(urunler) + JSON.stringify({gelen: id , gelenName: name}));
});

app.post("/products", (req, res) => {
  let id = req.query.id;
  let name = req.query.name;
  res.send(urunler);
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id); 
  const urun = urunler.find(u => u.id === id);
  if (urun) {
    res.send(urun);
  } else {
    res.status(404).send('Ürün bulunamadı');
  }
});

app.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});