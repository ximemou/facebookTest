const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname, '../public')));


app.listen(port, ()=> console.log(`Webhook server is listening on port ${port}`));

