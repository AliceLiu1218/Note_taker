


// /if ("/"), homeROutes

// if("/api", go to APIRoutes)
// const express = require('express');
// const app = express();
// const path = require('path');

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );


const express = require('express');

// Import our modular routers for /tips and /feedback
const noteRouter = require('./noteRoutes');
const homeRouter = require('./homeRoutes');


const app = express();

app.use('/', homeRouter);
//app.use('/note', noteRouter);


module.exports = app;

