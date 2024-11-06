const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());

app.use('/app/online_exam', routes);

module.exports = app;