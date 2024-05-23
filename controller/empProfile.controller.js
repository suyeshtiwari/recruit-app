const empProfileService = require('../services/empProfile.service');
//const empSkillService = require('../services/empSkill.service');
async function createEmpProfile(req, res, next) {
  try {
    const profile = await empProfileService.createEmpProfile(req);
    res.json({
      message:
        'Profile created successfully, please check your email for verification instructions',
      // Send the created position data
    });
  } catch (error) {
    console.log(error);
    next(error); // Pass the error to the error-handling middleware
  }
}

function create(req, res, next) {
  empProfileService
    .create(req.body)
    .then((empProfile) => res.json(empProfile))
    .catch(next);
}

async function getAllempProfile(req, res, next) {
  try {
    const profile = await empProfileService.getAllempProfile();
    res.json(profile);
  } catch (error) {
    console.log('find error', error);
    next(error); // Pass the error to the error-handling middleware
  }
}


/////////////////////
// async function createEmpSkill(req, res, next) {
//   try {
//     const empSkill = await empSkillService.createEmpSkill(req);
//     res.json({
//       message:
//         'Profile created successfully, please check your email for verification instructions',
//       // Send the created position data
//     });
//   } catch (error) {
//     console.log(error);
//     next(error); // Pass the error to the error-handling middleware
//   }
// }

// function create(req, res, next) {
//   empSkillService
//     .create(req.body)
//     .then((empSkill) => res.json(empSkill))
//     .catch(next);
// }

/////////////////////////

module.exports = { createEmpProfile, create, getAllempProfile };
