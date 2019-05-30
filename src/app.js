const express = require('express');

const app = express();

const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  email: String,
  name: String,
  address1: String,
  address2: String,
  city: String,
  country: String,
  postCode: String,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

app.post('/user', (req, res) => {
  req.status(200).json({ Hotel });
});

module.exports = app;
