const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');

let leads = [];
let quotes = [];
let orders = [];

app.post('/lead', (req, res) => {
  const lead = { id: leads.length + 1, ...req.body };
  leads.push(lead);
  res.status(201).json(lead);
});

app.post('/quote', (req, res) => {
  const quote = { id: quotes.length + 1, ...req.body };
  quotes.push(quote);
  res.status(201).json(quote);
});

app.post('/order', (req, res) => {
  const order = { id: orders.length + 1, ...req.body };
  orders.push(order);
  res.status(201).json(order);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public.html'));
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
