const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { Op } = require('sequelize');
const sendEmail = require('_helpers/send-email');
const db = require('_helpers/db');
const Role = require('_helpers/role');


module.exports = {createteamMember,getAllteamMembers
  };

  async function createteamMember(req) {
    const {
        // emp_id,
        members_name,
        members_roles,
        members_select,

    } = req.body;
    console.log('req.body is ', req.body);
  
    // Validate and handle position creation logic
    try {
      const teamMember = await db.teamMember.create({
        members_name,
        members_roles,
        members_select,
      });
      console.log('Profile created successfully:', teamMember);
    } catch (error) {
      console.error('Error creating profile:', error);
      throw error;
    }
  }

  async function getAllteamMembers(res) {
    return db.teamMember.findAll();
  }