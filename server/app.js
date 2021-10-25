const express = require('express');
const { join } = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const { env: { PORT, NODE_ENV } } = process;

const app = express();

app.set('port', PORT || 5000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.disable('x-powered-by');
app.use('/api/v1/', router);

if (NODE_ENV === 'development') {
  app.get('/', (req, res) => {
    res.json({ message: 'server running' });
  });
}
if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}
module.exports = app;
