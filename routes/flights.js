var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights')

// /*GET /flights */
router.get('/', flightsCtrl.index);

/* GET /flights/new */
router.get('/new', flightsCtrl.newFlights);

router.post('/', flightsCtrl.create);

router.get('/:id', flightsCtrl.show);

router.post('/:id', flightsCtrl.addDestination);

router.post('/:id/ticket',flightsCtrl.addTicket);

module.exports = router;