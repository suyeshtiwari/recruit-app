const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

function authenticateSchema(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function revokeTokenSchema(req, res, next) {
  const schema = Joi.object({
    token: Joi.string().empty(''),
  });
  validateRequest(req, next, schema);
}

function directResetSchema(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().empty(''),
    password: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function registerSchema(req, res, next) {
  const schema = Joi.object({
    title: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  });
  validateRequest(req, next, schema);
}

function verifyEmailSchema(req, res, next) {
  const schema = Joi.object({
    token: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function forgotPasswordSchema(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });
  validateRequest(req, next, schema);
}

function validateResetTokenSchema(req, res, next) {
  const schema = Joi.object({
    token: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function resetPasswordSchema(req, res, next) {
  const schema = Joi.object({
    token: Joi.string().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  });
  validateRequest(req, next, schema);
}

function createSchema(req, res, next) {
  const schema = Joi.object({
    title: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    role: Joi.string().valid(Role.Admin, Role.User).required(),
  });
  validateRequest(req, next, schema);
}

function createPositionSchema(req, res, next) {
  const schema = Joi.object({
    positiontitle: Joi.string().required(),
    projectId: Joi.number().integer().required(),
    experience: Joi.number().integer().required(),
    department: Joi.string().required(),
    location: Joi.string().required(),
    numOfPositions: Joi.number().integer().required(),
    description: Joi.string().required(),
  });

  validateRequest(req, next, schema);
}

function createSkillSchema(req, res, next) {
  const schema = Joi.object({
    skill_id: Joi.number().integer(),
    skill_name: Joi.string().required(),
    skill_desc: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
  const schemaRules = {
    title: Joi.string().empty(''),
    firstName: Joi.string().empty(''),
    lastName: Joi.string().empty(''),
    email: Joi.string().email().empty(''),
    password: Joi.string().min(6).empty(''),
    confirmPassword: Joi.string().valid(Joi.ref('password')).empty(''),
  };

  // only admins can update role
  if (req.user.role === Role.Admin) {
    schemaRules.role = Joi.string().valid(Role.Admin, Role.User).empty('');
  }

  const schema = Joi.object(schemaRules).with('password', 'confirmPassword');
  validateRequest(req, next, schema);
}

module.exports = {
  authenticateSchema,
  revokeTokenSchema,
  registerSchema,
  resetPasswordSchema,
  verifyEmailSchema,
  forgotPasswordSchema,
  validateResetTokenSchema,
  createSchema,
  updateSchema,
  directResetSchema,
  createPositionSchema,
  createSkillSchema,
};
