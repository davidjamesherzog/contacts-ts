var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var contactModel = new Schema({
  firstName: {type: String},
  lastName: {type: String},
  phone: {type: String}
});

module.exports = mongoose.model('Contact', contactModel);
