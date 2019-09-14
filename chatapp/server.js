const express = require('express');
const bodyParser = require('body-parser');
const route=require('./app/routes/user.route');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/",route)
//app.use("/",)
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
//mongoose.connect(uri, { useNewUrlParser: true });
// mongoose.createConnection(uri, { useNewUrlParser: true });
 mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to chatapp application." });
});

// listen for requests
app.listen(3010, () => {
    console.log("Server is listening on port 3010");
});

