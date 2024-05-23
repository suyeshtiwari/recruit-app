const teamService = require('../services/team.service');
const TeamEmpRelationService = require('../services/team.service');

async function createteam(req, res, next) {
  try {
    const profile = await teamService.createteam(req);
    res.json({
      message: 'Add team successfully',

      // Send the created position data
    });
  } catch (error) {
    console.log(error);
    next(error); // Pass the error to the error-handling middleware
  }
}

function create(req, res, next) {
  teamService
    .create(req.body)
    .then((team) => res.json(team))
    .catch(next);
}

///////create role cloumn in team-emp-rlation table
async function createTeamEmpRelation(req, res, next) {
  try {
    const profile = await TeamEmpRelationService.createTeamEmpRelation(req);
    res.json({
      message: 'Add team successfully',
      // Send the created position data
    });
  } catch (error) {
    console.log(error);
    next(error); // Pass the error to the error-handling middleware
  }
}

function create(req, res, next) {
  TeamEmpRelationService.create(req.body)
    .then((team) => res.json(team))
    .catch(next);
}

async function getTeamEmpRelation(req, res, next) {
  try {
    const teams = await TeamEmpRelationService.getTeamEmpRelation();
    res.json(teams); // Ensure that skills is a valid JSON array or object
  } catch (error) {
    console.error('Error getting team :', error);
    next(error);
  }
}
///////////

async function getAllteam(req, res, next) {
  try {
    const teams = await teamService.getAllteam();
    res.json(teams); // Ensure that skills is a valid JSON array or object
  } catch (error) {
    console.error('Error getting team Members:', error);
    next(error);
  }
}

async function getMyTeam(req, res, next) {
  try {
    const myTeams = await teamService.getMyTeams(req);
    res.json({data: myTeams});
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createteam,
  getAllteam,
  create,
  createTeamEmpRelation,
  getTeamEmpRelation,
  getMyTeam
};
