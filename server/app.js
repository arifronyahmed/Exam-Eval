const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'))
app.use(express.json());

// newsletter route

app.post('/api/v1/subscribe', (req, res) => {
  const { email } = req.body;
  console.log(email);

  res.status(200).json({
    status: 'success',
  });
});

// ***********************************
module.exports = app;
