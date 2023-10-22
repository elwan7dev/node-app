const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');


// init app 
const PORT = process.env.PORT || 4000;
const app = express();

const DB_USERNAME = 'root';
const DB_PASS = 'example';
// mongo  - docker service
const DB_HOST = 'mongo';
const DB_PORT = 27017;
const URI = `mongodb://${DB_USERNAME}:${DB_PASS}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI)
.then(() => console.log('connect to db ... '))
.catch((err) => console.log('faild to conect: ', err));

// first route
app.get('/', (req, res) => res.send('<h1>Hello Elwan -hi  </h1>'));


// log
app.listen(PORT, () => console.log(`App is up and running on Port: ${PORT}`));



