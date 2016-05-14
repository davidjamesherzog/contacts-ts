var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var phoneValidator = [
  function (val) {
    var phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    return (val.match(phoneRegex) !== null);
  },
  // Custom error text...
  'Enter a valid phone number.' ];

var contactModel = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    validate: phoneValidator
  }
});

module.exports = mongoose.model('Contact', contactModel);
