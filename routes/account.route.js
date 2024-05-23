const express = require('express');
const router = express.Router();

const accountSchemaValidators = require('../schemaValidators/accounts.schema');
//const empProfileSchemaValidators = require('../schemaValidators/empProfile.schema');
const Role = require('../_helpers/role');
const accountController = require('../controller/accounts.controller');
//const empProfileController = require('../controller/empProfile.controller');
const authorize = require('../_middleware/authorize');

router.post(
  '/authenticate',
  accountSchemaValidators.authenticateSchema,
  accountController.authenticate
);
router.post('/refresh-token', accountController.refreshToken);
router.post(
  '/revoke-token',
  authorize(),
  accountSchemaValidators.revokeTokenSchema,
  accountController.revokeToken
);
router.post(
  '/register',
  accountSchemaValidators.registerSchema,
  accountController.register
);
router.post(
  '/verify-email',
  accountSchemaValidators.verifyEmailSchema,
  accountController.verifyEmail
);
router.post(
  '/forgot-password',
  accountSchemaValidators.forgotPasswordSchema,
  accountController.forgotPassword
);
router.post(
  '/validate-reset-token',
  accountSchemaValidators.validateResetTokenSchema,
  accountController.validateResetToken
);
router.post(
  '/reset-password',
  accountSchemaValidators.resetPasswordSchema,
  accountController.resetPassword
);
router.post(
  '/direct-reset',
  accountSchemaValidators.directResetSchema,
  accountController.directPasswordReset
);
router.get('/', authorize(Role.Admin), accountController.getAll);
router.get('/:id', authorize(), accountController.getById);
router.post(
  '/',
  authorize(Role.Admin),
  accountSchemaValidators.createSchema,
  accountController.create
);
router.put(
  '/:id',
  authorize(),
  accountSchemaValidators.updateSchema,
  accountController.update
);
router.delete('/:id', authorize(), accountController._delete);
router.post(
  '/positions',
  authorize(Role.User),
  accountSchemaValidators.createPositionSchema,

  accountController.createPosition
);

// router.post('/emp-profile', empProfileSchemaValidators.empProfileSchema, empProfileController.createEmpProfile);
// router.get('/emp-profile', empProfileController.getAllempProfile);
// router.get('/emp-profile/:id', empProfileController.getByIdempProfile);
// router.delete('/delete_emp-profile/:emp_id', empProfileController.delete_empProfile);
module.exports = router;
