const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

function teamSchema(req, res, next) {
    const schema = Joi.object({
        // emp_id: Joi.number().integer(),
        team_name: Joi.string().required(),
        team_description: Joi.string().required(),
    });
  
    validateRequest(req, next, schema);
  }


  ////// team-emp-relation validation
  function teamEmpRelationSchema(req, res, next) {
    const schema = Joi.object({
      role: Joi.string().required(),
   
    });
  
    validateRequest(req, next, schema);
  }

  module.exports = {teamSchema,teamEmpRelationSchema}