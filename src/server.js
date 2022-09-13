require('dotenv').config();
const app = require('./api');

const port = process.env.API_PORT || 3000;

const urlImage = 'https://www.intoxianime.com/wp-content/uploads/2022/06/s2.jpg';
app.get('/', (_req, res) => {
  res.send(`<H1>The server is online.</H1>
  <img src="${urlImage}" alt="Ushio Kofune like" style="width:500px">`);
});

app.listen(port, () => console.log('ouvindo porta', port));
