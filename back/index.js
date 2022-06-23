require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const { routes } = require('./src/routes');
const { join } = require('path');
// mongodb+srv://fenris:fenris@cluster0.uthiwc0.mongodb.net/?retryWrites=true&w=majority


mongoose.connect("mongodb://localhost:27017/", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// инициализируем приложение
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', (_, res) => res.sendFile(join(__dirname + '/index.html')));

routes.forEach((item) => {
  app.use(`/api/v1/${item}`, require(`./src/routes/${item}`));
});


// объявим наши  роуты
const PORT = 3001;
http.createServer({}, app).listen(PORT);

console.log(`Server running at ${PORT}`);
