const  mongoose  = require("mongoose");
mongoose.Promise  = require("bluebird");
const url=require("./database.config");
const  connect  =  mongoose.connect(url, { useNewUrlParser: true  });
module.exports  =  connect;
