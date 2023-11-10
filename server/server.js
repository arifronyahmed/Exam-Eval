require('dotenv').config({ path: './config.env' });

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {}).then(() => {
  console.log('Connected to MongoDB Cloud');
});

const port = process.env.PORT || 3000;
const app = require('./app');

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
