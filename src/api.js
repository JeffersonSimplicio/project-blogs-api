const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const errorHandling = require('./middlewares/error/error');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', routes.loginRoute);
app.use('/user', routes.userRoute);
app.use('/categories', routes.categoryRoute);
app.use('/post', routes.postRoute);
app.use(errorHandling);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
