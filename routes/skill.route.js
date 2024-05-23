const express = require('express');
const router = express.Router();

const accountSchemaValidators = require('../schemaValidators/accounts.schema');
const Role = require('../_helpers/role');
const skillController = require('../controller/skills.controller');
const authorize = require('../_middleware/authorize');

router.post(
  '/createskills',

  accountSchemaValidators.createSkillSchema,

  skillController.createSkills
);
router.get('/getAll-skills', skillController.getAllSkills);
router.put('/updateskills/:skillId', skillController.updateSkill);
router.delete('/deleteskills/:skillId', skillController.deleteSkill);

module.exports = router;
