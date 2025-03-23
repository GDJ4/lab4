const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Загружаем товары из файла data/products.json
const productsPath = path.join(__dirname, 'data', 'products.json');
let products = require(productsPath);

function saveProducts() {
  fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
}

// Получение списка товаров
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Добавление товаров (одного или нескольких)
app.post('/api/products', (req, res) => {
  const newProducts = Array.isArray(req.body) ? req.body : [req.body];
  newProducts.forEach(product => {
    product.id = Date.now() + Math.floor(Math.random() * 1000);
    products.push(product);
  });
  saveProducts();
  res.json({ message: 'Products added', products: newProducts });
});

// Редактирование товара по ID
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  Object.assign(product, req.body);
  saveProducts();
  res.json({ message: 'Product updated', product });
});

// Удаление товара по ID
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  const removed = products.splice(index, 1);
  saveProducts();
  res.json({ message: 'Product deleted', product: removed[0] });
});

app.listen(port, () => console.log(`Admin REST API listening on port ${port}`));
