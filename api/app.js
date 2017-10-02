var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

mongoose.connect('mongodb://localhost/portalc', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var models = require('./models/report')(app,mongoose);
var ReporCtrl = require('./controllers/report');

var router = express.Router();

router.get('/', function(req, res) {
 res.send("Hello World test");
});

app.use(router);

var api = express.Router();

api.route('/report')
  .post(ReporCtrl.addReport);

api.route('/reports')
  .get(ReporCtrl.showReports)

app.use('/api', api);

app.listen(3000, function() {
  console.log("Server in port 3000");
});
