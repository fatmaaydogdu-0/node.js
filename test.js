import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello my world!');
});
app.get('/test', (req, res) => {
    res.send('hello my test!');
  });

app.listen(port, () => {
  console.log(`Sunucu çalışıyor ${port}`);
});

