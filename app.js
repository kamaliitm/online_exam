const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());

app.use('/app/online_exam', routes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

module.exports = app;