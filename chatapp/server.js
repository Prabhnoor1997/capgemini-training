const express = require('express');
const bodyParser = require('body-parser');
const route = require('./app/routes/user.route');
// create express app
const app = express();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
const port = 3010;





// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/", route)
var http = require('http').Server(app);
var io=require('socket.io')(http);
io.on("connection", (socket) => {
    console.log("user connected");
    socket.emit('testForevent',{message:"Hey its emitted from socket server"});
    socket.on('disconnect',function(){
        console.log("A user disconnected")
    })
});
http.listen(port, function(){
    console.log('server is listening on port 30101');
})
//app.use("/",)
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
app.use(express.static("./UI"));
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


