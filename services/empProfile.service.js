const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { Op } = require('sequelize');
const sendEmail = require('_helpers/send-email');
const db = require('_helpers/db');
const Role = require('_helpers/role');

module.exports = {
  createEmpProfile,
  getAllempProfile,
 // empSkillService
  // getByIdempProfile,
  // deleteEmpProfile,
  // delete_empProfile
};

async function createEmpProfile(req) {
  const {
    // emp_id,
    emp_name,
    emp_email,
    emp_address,
    emp_phonenumber,
    department,
    experience,
    qualification,
    current_jobtitle,
    employment_type,
    
   //skill_id
  } = req.body;
  console.log('req.body is ', req.body);

  // Validate and handle position creation logic
  try {
    const empProfile = await db.Emp_profile.create({
      //  emp_id,
      emp_name,
      emp_email,
      emp_address,
      emp_phonenumber,
      department,
      experience,
      qualification,
      current_jobtitle,
      employment_type,
     // skill_id
     include :[{
           model : db.Key_Skills,
           attributes: ['skill_id','skill_name', 'skill_desc', 'skill_isActive'],
          }]
        
    });  
    console.log('Profile created successfully:', empProfile);
  } catch (error) {
    console.error('Error creating profile:', error);
    throw error;
  }
}

async function getAllempProfile(res) {
  //  const empProfiles = await db.EmpProfile.findAll();
  return db.Emp_profile.findAll({
   include :[{
    model : db.Key_Skills,
   // attributes: ['skill_id', 'skill_name'],
   }]
  });
  //return  empProfiles.map(x => basicDetails(x));
}


////////////////
// async function empSkillService(req) {
//   const { 
 
//   } = req.body;
//   console.log('req.body is ', req.body);

//   // Validate and handle position creation logic
//   try {
//     const empProfile = await db.emp_skill.create({
    
//      include :[{
//            model : db.Key_Skills,
//            //attributes: ['skill_id','skill_name', 'skill_desc', 'skill_isActive'],
//           }],
//           include :[{
//             model :db.Emp_profile,
//             //attributes: ['skill_id','skill_name', 'skill_desc', 'skill_isActive'],
//            }]
        
//     });
//     console.log('Profile created successfully:', empProfile);
//   } catch (error) {
//     console.error('Error creating profile:', error);
//     throw error;
//   }
// }


/////////////////

// async function getByIdempProfile(id) {
//     const profile = await empProfile(id);
//     return basicDetails(profile);
//   }

//   async function getEmpProfile(emp_id) {
//     const empProfile = await db.Emp_profile.findByPk(emp_id);
//     if (!empProfile) throw 'Account not found';
//     return empProfile;
// }

// async function delete_empProfile(emp_id) {
//     const empProfile = await getEmpProfile(emp_id);
//     await empProfile.destroy();
//   }

// function basicDetails(empProfile) {
//     const {
//         emp_id,
//         emp_name,
//         emp_email,
//         emp_address,
//         emp_phonenumber,
//         department,
//         experience,
//         qualification,
//         current_jobtitle,
//         employment_type,
//     } = empProfile;
//     return {
//         emp_id,
//         emp_name,
//         emp_email,
//         emp_address,
//         emp_phonenumber,
//         department,
//         experience,
//         qualification,
//         current_jobtitle,
//         employment_type,
//     };
//   }
