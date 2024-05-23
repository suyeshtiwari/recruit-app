const accountService = require('../services/account.service');
const skillService = require('../services/skills.service');

async function createSkills(req, res, next) {
  try {
    const skill = await skillService.createSkills(req);
    res.json({
      message:
        'skills created successfully, please check your email for verification instructions',

      // Send the created position data
    });
  } catch (error) {
    console.log(error);
    next(error); // Pass the error to the error-handling middleware
  }
}

async function getAllSkills(req, res, next) {
  try {
    const skills = await skillService.getAllSkills();
    res.json(skills); // Ensure that skills is a valid JSON array or object
  } catch (error) {
    console.error('Error getting skills:', error);
    next(error);
  }
}

async function updateSkill(req, res, next) {
  try {
    const { skillId } = req.params; // Assuming you're passing the skillId in the URL

    // Validate and handle update logic
    const updatedSkill = await skillService.updateSkill(skillId, req.body);

    res.json({
      message: 'Skill updated successfully',
      skill: updatedSkill,
    });
  } catch (error) {
    console.error('Error updating skill:', error);
    next(error); // Pass the error to the error-handling middleware
  }
}

async function deleteSkill(req, res, next) {
  try {
    const { skillId } = req.params; // Assuming you're passing the skillId in the URL

    // Validate and handle delete logic
    await skillService.deleteSkill(skillId);

    res.json({
      message: 'Skill deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting skill:', error);
    next(error); // Pass the error to the error-handling middleware
  }
}

module.exports = {
  createSkills,
  getAllSkills,
  updateSkill,
  deleteSkill,
};
