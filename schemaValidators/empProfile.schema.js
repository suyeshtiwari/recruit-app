const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

function empProfileSchema(req, res, next) {
  const schema = Joi.object({
    // emp_id: Joi.number().integer(),
    emp_name: Joi.string().required(),
    emp_email: Joi.string().required(),
    emp_address: Joi.string().required(),
    emp_phonenumber: Joi.number().integer().required(),
    department: Joi.string().required(),
    experience: Joi.number().integer().required(),
    qualification: Joi.string().required(),
    current_jobtitle: Joi.string().required(),
    employment_type: Joi.string().required(),
  });

  validateRequest(req, next, schema);
}

module.exports = { empProfileSchema };
