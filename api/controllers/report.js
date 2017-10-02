var mongoose = require('mongoose');
var Report =  mongoose.model('Report');

exports.addReport = function(req, res) {
  var report = new Report({
    titulo: req.body.title,
    contenido: req.body.content,
    autor: req.body.author,
    correo: req.body.email,
    notificar: req.body.notify
  });
  report.save(function(err, report) {
    if(err) return res.send(500, err.message);
    res.status(200).jsonp(report);
  });
};

exports.showReports = function(req, res) {
  Report.find({visible:true}, function(err, reports) {
    if(err) res.send(500, err.message);
    res.status(200).jsonp(reports);
  });
};
