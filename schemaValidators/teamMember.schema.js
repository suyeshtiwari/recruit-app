const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

function teamMemberSchema(req, res, next) {
    const schema = Joi.object({
      // emp_id: Joi.number().integer(),
      members_name: Joi.string().required(),
      members_roles: Joi.string().required(),
      members_select:Joi.string().required(),
 
    });
  
    validateRequest(req, next, schema);
  }


  module.exports = {teamMemberSchema}