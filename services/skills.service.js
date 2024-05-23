const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { Op } = require('sequelize');
const sendEmail = require('_helpers/send-email');
const db = require('_helpers/db');
const Role = require('_helpers/role');

async function createSkills(req) {
  const { skill_name, skill_desc } = req.body;
  console.log('req.body is ', req.body);

  // Validate and handle position creation logic
  try {
    const skill = await db.Key_Skills.create({
      skill_name,
      skill_desc,
    });
    console.log('skill created successfully:', skill);
  } catch (error) {
    console.error('Error creating position:', error);
    throw error;
  }
}
async function getAllSkills(res) {
  return db.Key_Skills.findAll({
     attributes: ['skill_id', 'skill_name', 'skill_desc', 'skill_isActive'],
  });
}

async function updateSkill(skillId, updatedData) {
  try {
    const skill = await db.Key_Skills.findByPk(skillId);

    if (!skill) {
      throw new Error('Skill not found'); // You may customize this error message
    }

    // Update the skill with the provided data
    const updatedSkill = await skill.update(updatedData);

    return updatedSkill;
  } catch (error) {
    throw error;
  }
}

async function deleteSkill(skillId) {
  try {
    const skill = await db.Key_Skills.findByPk(skillId);

    if (!skill) {
      throw new Error('Skill not found'); // You may customize this error message
    }

    // Delete the skill
    await skill.destroy();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createSkills,
  getAllSkills,
  updateSkill,
  deleteSkill,
};
