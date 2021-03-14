const app = require('express')();

app.get('/', (req, res) => res.send('bot'));

module.exports = () => {
  app.listen(3000);
}
