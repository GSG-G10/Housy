require('env2')('.env');
const app = require('./app');

const PORT = app.get('port');

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running at http://localhost:${PORT}`);
});
