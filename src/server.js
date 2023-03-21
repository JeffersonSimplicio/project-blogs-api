require('dotenv').config();
const app = require('./api');
const connectionCheck = require('./middlewares/connectionCheck');
const nonExistentRoute = require('./middlewares/nonExistentRoute ');

const port = Number(process.env.API_PORT) || 3000;

app.get('/', connectionCheck);

app.use(nonExistentRoute);

app.listen(port, () => console.log('Running in the port ', port));
