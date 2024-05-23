const express = require('express');
const router = express.Router();
const Role = require('../_helpers/role');
const authorize = require('../_middleware/authorize');

const teamSchemaValidators = require('../schemaValidators/team.schema');
//const teamEmpRelations = require('../schemaValidators/team.schema');
const teamController = require('../controller/team.controller');

router.post('/', teamController.createteam);
router.get('/', authorize(Role.Admin), teamController.getAllteam);
router.get('/my-teams',authorize(), teamController.getMyTeam);
router.post(
  '/team-member',
  teamSchemaValidators.teamEmpRelationSchema,
  teamController.createTeamEmpRelation
);
router.get('/team_emp', teamController.getTeamEmpRelation);
module.exports = router;
