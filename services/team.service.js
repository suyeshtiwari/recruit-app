const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { Op, QueryTypes } = require('sequelize');
const sendEmail = require('_helpers/send-email');
const db = require('_helpers/db');
const Role = require('_helpers/role');
const { parseJwt } = require('../_helpers/utils');

const myTeamQuery = "SELECT DISTINCT TEAMS.team_name, TEAMS.team_id, TEAMEMP.role FROM u333681812_HR_REQ_APP.team_emp_relations as TEAMEMP INNER JOIN u333681812_HR_REQ_APP.teams AS TEAMS ON TEAMEMP.teamTeamId = team_id INNER JOIN u333681812_HR_REQ_APP.emp_profiles AS EMP ON TEAMEMP.empProfileEmpId = :empId;";
module.exports = {
  createteam,
  getAllteam,
  // createTeamEmpRelation,
  getMyTeams
};

async function createteam(req) {
  const {
    // emp_id,
    teamName,
    description,
    employee,
  } = req.body;
  console.log('req.body is ', req.body);
  // employees = [
  //   { emp_id: 3, job_role: 'software developer' },
  //   { emp_id: 4, job_role: 'frontedn developer' },
  // ];
  // Validate and handle position creation logic
  try {
    const team = await db.team.create({
      team_name: teamName,
      team_description: description,
    });
    for (const employeeData of employee) {
      const { member, role } = employeeData;
      const response = await db.team_emp_relation.create({
        teamTeamId: team.team_id,
        empProfileEmpId: member,
        role: role,
      });
    }

    console.log('Profile created successfully:', team);
  } catch (error) {
    console.error('Error creating profile:', error);
    throw error;
  }
}
async function getAllteam(req) {
  return db.team.findAll({
    include: [
      {
        model: db.Emp_profile,
        // model : db.team,
      },
    ],
  });
}
async function getMyTeams(req) {
  const teams = await db.sequelize.query(myTeamQuery, {
    replacements: {empId: req.user.id},
    type: QueryTypes.SELECT
  });
  return teams;
}
// async function getAllteam(res) {
//   return db.team.findAll();
// }

///////create role cloumn in team-emp-rlation table

// async function createTeamEmpRelation(req) {
//   const {
//     // emp_id,
//     role,
//   } = req.body;
//   console.log('req.body is ', req.body);

//   // Validate and handle position creation logic
//   try {
//     const teamdata = await db.team_emp_relation.create({
//       //role_id,
//       role,

//       include: [
//         {
//           model: db.team,
//           attributes: ['team_id', 'team_name', 'team_description'],
//         },
//       ],
//       include: [
//         {
//           model: db.Emp_profile,
//           //attributes: ['emp_id'],
//         },
//       ],
//     });

// {
//   include: db.Emp_profile
// });
//     console.log('team created successfully:', teamdata);
//   } catch (error) {
//     console.error('Error creating profile:', error);
//     throw error;
//   }
// }
