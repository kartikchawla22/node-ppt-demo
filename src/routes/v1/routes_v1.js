var express = require('express'); // Making Object Of Express
var router = express.Router(); // Using Routing Function of Express
var apiController = require('../../controllers/controller');

/*
Wrapper APIs Start
*/
router.route('/getppt')
  .get(apiController.generateSamplePPT)

module.exports = router; // Exporting router
