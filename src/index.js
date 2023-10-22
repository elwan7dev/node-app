const express = require('express');
const res = require('express/lib/response');



// init app 
const PORT = process.env.PORT || 4000;
const app = express();

// first route
app.get('/', (req, res) => res.send('<h1>Hello Elwan -hi  </h1>'));


// log
app.listen(PORT, () => console.log(`App is up and running on Port: ${PORT}`));



