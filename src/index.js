const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const redis = require('redis')


// init app 
const PORT = process.env.PORT || 4000;
const app = express();

// connect to mongo
const DB_USERNAME = 'root';
const DB_PASS = 'example';
const DB_HOST = 'mongo'; // docker service name
const DB_PORT = 27017;
const URI = `mongodb://${DB_USERNAME}:${DB_PASS}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI)
    .then(() => console.log('connect to db ... '))
    .catch((err) => console.log('faild to conect: ', err));

// connect to redis
const REDIS_HOST = 'redis'; // docker service name
const REDIS_PORT = 6379;
const redisClient = redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
});

redisClient.on('error', err => console.log('Redis Client Error', err))
    .on('connect', () => console.log('connected to redis...'))
    .connect();

// first route
app.get('/', (req, res) => {
    redisClient.set('products', 'products .....');
    res.send('<h1>Hello Elwan -hi</h1>');
});

app.get('/data', async (req,res) => {
    const products = await redisClient.get('products');
    res.send(`<h1>get from redis :>>>>> ${products}</h1>`);
})

// log
app.listen(PORT, () => console.log(`App is up and running on Port: ${PORT}`));



