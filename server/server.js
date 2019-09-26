require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');

const port = process.env.PORT || 4000;
const localhost = 'http://localhost';

app.set('json spaces', 4)
app.use(compression());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


const main = () => {
    app.listen(port);
    return console.debug(`🚀  Server listening on ${localhost}:${port}`);
}

main();