const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'The Hotel Challenge DB is up and running!' });
});

module.exports = app;
