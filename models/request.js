const Joi = require('joi');
const mongoose = require('mongoose');

const Request = mongoose.model('Request', new mongoose.Schema({
  contactName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  
  detail: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  phone: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  status: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  time: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  },
  uid: {
    type: String,
    required: true,
  }
}));

function validateRequest(request) {
  const schema = {
    contactName: Joi.string().min(1).max(255).required(),
    detail: Joi.string().min(1).max(255).required(),
    phone: Joi.string().min(1).max(255).required(),
    status: Joi.string().min(1).max(255).required(),
    time: Joi.string().min(1).max(255).required(),
    title: Joi.string().min(1).max(255).required(),
    uid: Joi.String.request()
  };

  return Joi.validate(request, schema);
}

exports.Request = Request; 
exports.validate = validateRequest;