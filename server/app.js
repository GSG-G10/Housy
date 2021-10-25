const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const { env: { PORT } } = process;

const app = express();

app.set('port', PORT || 5000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.disable('x-powered-by');

module.exports = app;
