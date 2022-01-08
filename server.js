// require express
var express = require('express')
var app = express();


// changes
const path = require('path');
const port = process.env.PORT || 5500;
app.use(express.static('./dist/CS5610-web-dev-project'));
//changes

// require body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.kj5za.mongodb.net/AlumniJobPortal?retryWrites=true&w=majority', { useNewUrlParser: true ,useUnifiedTopology: true }).then();
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log('connected with mongoose');
// });


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        req.headers.origin);
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


var userService = require('./services/user.service.server');
userService(app);


var jobApplicationService = require('./services/job-application.service.server');
jobApplicationService(app);

var jobPostingService = require('./services/job-posting.service.server');
jobPostingService(app);


var recruiterService = require('./services/recruiter-detail.service.server');
recruiterService(app);

//changes

// app.listen(process.env.PORT || 5500, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/CS5610-web-dev-project/index.html'));
  });

  app.listen(port,()=>{console.log("Server Ready at" +port)});
//changes
