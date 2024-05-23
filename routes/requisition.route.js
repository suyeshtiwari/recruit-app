const express = require('express');
const router = express.Router();

const accountSchemaValidators = require('../schemaValidators/accounts.schema');
const Role = require('../_helpers/role');
const requisitionController = require('../controller/requisition.controller');
const authorize = require('../_middleware/authorize');

router.post(
  '/createRequisition',

  requisitionController.createRequisitions
);
router.get('/getAll-requisition', requisitionController.getAllRequisitions);
router.get('/:id', requisitionController.getAllRequisitionById);
router.put(
  '/updateRequisition/:requisitionId',
  requisitionController.updateRequisitions
);
router.delete(
  '/deleteRequisition/:requisitionId',
  requisitionController.deleteRequisitions
);

module.exports = router;
