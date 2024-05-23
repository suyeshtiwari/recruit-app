const express = require('express');
const router = express.Router();
const Role = require('../_helpers/role');
const authorize = require('../_middleware/authorize');


const empProfileSchemaValidators = require('../schemaValidators/empProfile.schema'); 
const empProfileController = require('../controller/empProfile.controller');
// const empSkillController = require('../controller/empProfile.controller')
router.post('/emp-profile', empProfileSchemaValidators.empProfileSchema, empProfileController.createEmpProfile);
router.get('/getAll_empProfile', empProfileController.getAllempProfile);
// router.post('/emp_skill', empSkillController.createEmpSkill);
module.exports = router;