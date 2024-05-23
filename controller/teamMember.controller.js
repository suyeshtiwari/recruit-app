const teamMemberService = require('../services/teamMember.service');

async function createteamMember(req, res, next) {
    try {
      const profile = await teamMemberService.createteamMember(req);
      res.json({
        message:
          'Add member successfully',
        // Send the created position data
      });
    } catch (error) {
      console.log(error);
      next(error); // Pass the error to the error-handling middleware
    }
  }

  function create(req, res, next) {
    teamMemberService.create(req.body)
      .then((teamMember) => res.json(teamMember))
      .catch(next);
  }



  async function getAllteamMembers(req, res, next) {
    try {
      const teamMembers = await teamMemberService.getAllteamMembers();
      res.json(teamMembers); // Ensure that skills is a valid JSON array or object
    } catch (error) {
      console.error('Error getting team Members:', error);
      next(error);
    }
  }

  module.exports = {createteamMember,getAllteamMembers,
    create,
   }