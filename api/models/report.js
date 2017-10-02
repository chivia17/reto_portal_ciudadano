var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var reportSchema =  new Schema({
  titulo: { type: String },
  contenido: { type: String },
  visible: { type: Boolean , default: true},
  autor: { type: String },
  correo: { type: String },
  fecha_publicacion: { type: Date, default: Date.now },
  notificar: { type: Boolean}
});

module.exports = mongoose.model('Report', reportSchema);
