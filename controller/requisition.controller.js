const accountService = require('../services/account.service');
const requisitionService = require('../services/requisition.service');

async function createRequisitions(req, res, next) {
  try {
    const skill = await requisitionService.createRequisitions(req);
    res.json({
      message:
        'requisitions created successfully, please check your email for verification instructions',

      // Send the created position data
    });
  } catch (error) {
    console.log('there is an error', error);
    next(error); // Pass the error to the error-handling middleware
  }
}

async function getAllRequisitions(req, res, next) {
  try {
    const requisitions = await requisitionService.getAllRequisitions();
    res.json(requisitions); // Ensure that skills is a valid JSON array or object
  } catch (error) {
    console.error('Error getting skills:', error);
    next(error);
  }
}
async function getAllRequisitionById(req, res, next) {
  const { id } = req.params;
  console.log(id);
  try {
    const requisitions = await requisitionService.getAllRequisitionById(id);
    res.json(requisitions); // Ensure that skills is a valid JSON array or object
  } catch (error) {
    console.error('Error getting skills:', error);
    next(error);
  }
}

async function updateRequisitions(req, res, next) {
  try {
    const { reqisitionId } = req.params; // Assuming you're passing the skillId in the URL

    // Validate and handle update logic
    const updatedRequisitions = await requisitionService.updateRequisitions(
      reqisitionId,
      req.body
    );

    res.json({
      message: 'Requisition updated successfully',
      requisitions: updatedRequisitions,
    });
  } catch (error) {
    console.error('Error updating skill:', error);
    next(error); // Pass the error to the error-handling middleware
  }
}

async function deleteRequisitions(req, res, next) {
  try {
    const { RequisitionId } = req.params; // Assuming you're passing the skillId in the URL

    // Validate and handle delete logic
    await requisitionService.deleteRequisition(RequisitionId);

    res.json({
      message: 'Requisition deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting Requisition:', error);
    next(error); // Pass the error to the error-handling middleware
  }
}

module.exports = {
  createRequisitions,
  getAllRequisitions,
  updateRequisitions,
  deleteRequisitions,
  getAllRequisitionById,
};
