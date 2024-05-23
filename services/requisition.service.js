const db = require('_helpers/db');

async function createRequisitions(req, res) {
  const {
    job_title,
    department,
    industry_type,
    default_position,
    location,
    no_of_openings,
    employment_type,
    education,
    experience,
    salary,
    jobDescription,
    job_role,
    keySkills,
  } = req.body;
  console.log('req.body is ', req.body);
  const skill_ids = keySkills;
  console.log('skill_ids is ', skill_ids);
  console.log('salary is', salary);

  // Validate and handle position creation logic
  try {
    const requisition = await db.Requisition.create({
      requisition_name: job_title,
      experience,
      location,
      department,
      industry_type,
      employment_type: employment_type,
      salary,
      posted_date: null,
      opening: no_of_openings,
      applicant: null,
      job_description: jobDescription,
      education,
      job_role,
    });

    const extractedSkillIds = skill_ids.map((skill) => skill.skill_id);
    console.log(extractedSkillIds);

    const skills = await db.Key_Skills.findAll({
      where: { skill_id: extractedSkillIds },
      attributes: ['skill_id', 'skill_name', 'skill_desc', 'skill_isActive'], // Fetch all skills with IDs in the skill_ids array
    });
    // const plainSkills = skills.map((skill) => skill.get({ plain: true }));
    // console.log(plainSkills);
    await requisition.addSkills(skills);
    // If successful, respond with a success message or the created requisition
  } catch (error) {
    console.error('Error creating position:', error);
    throw error;
  }
}
async function getAllRequisitions(res) {
  try {
    // Fetch all requisitions along with their associated skills
    const requisitions = await db.Requisition.findAll({
      include: [{ model: db.Key_Skills, as: 'skills' }],
    });

    // If successful, respond with the requisitions
    return requisitions;
  } catch (error) {
    console.error('Error fetching requisitions:', error);
    res.status(500).json({ error: 'Failed to fetch requisitions' });
  }
}
async function getAllRequisitionById(id) {
  try {
    // Fetch requisition by ID along with its associated skills
    const requisition = await db.Requisition.findByPk(id, {
      include: [{ model: db.Key_Skills, as: 'skills' }],
    });
    return requisition;
    // If requisition is found, respond with the requisition
  } catch (error) {
    // If an error occurs during the process, log the error and send a 500 status response
    console.error('Error fetching requisition by ID:', error);
  }
}
async function updateRequisitions(reqisitionId, updatedData) {
  try {
    const requisition = await db.Requisition.findByPk(reqisitionId);

    if (!requisition) {
      throw new Error('Skill not found'); // You may customize this error message
    }

    // Update the skill with the provided data
    const updatedRequisitions = await requisition.update(updatedData);

    return updatedRequisitions;
  } catch (error) {
    throw error;
  }
}

async function deleteRequisition(reqisitionId) {
  try {
    const requisition = await db.Requisition.findByPk(requisition);

    if (!requisition) {
      throw new Error('Skill not found'); // You may customize this error message
    }

    // Delete the skill
    await requisition.destroy();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createRequisitions,
  getAllRequisitions,
  updateRequisitions,
  deleteRequisition,
  getAllRequisitionById,
};
