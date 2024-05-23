const express = require('express');
const router = express.Router();
const Role = require('../_helpers/role');
const authorize = require('../_middleware/authorize');

const teamMemberSchemaValidators = require('../schemaValidators/teamMember.schema');
const teamMemberController = require('../controller/teamMember.controller');

router.post('/teamMember', teamMemberSchemaValidators.teamMemberSchema, teamMemberController.createteamMember);
router.get('/getAll_teamMembers', teamMemberController.getAllteamMembers);
module.exports = router;