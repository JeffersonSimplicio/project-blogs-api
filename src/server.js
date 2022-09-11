require('dotenv').config();
const app = require('./api');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
const urlImage = 'https://www.intoxianime.com/wp-content/uploads/2022/06/s2.jpg';
app.get('/', (_request, response) => {
  response.send(`<H1>The server is online.</H1>
  <img src="${urlImage}" alt="Ushio Kofune like" style="width:500px">`);
});

app.listen(port, () => console.log('ouvindo porta', port));
