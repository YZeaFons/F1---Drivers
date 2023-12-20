const { Router } = require("express");
const getDrivers = require("../controllers/getDrivers");
const getDetail = require("../controllers/getDetail");
const get15drivers = require("../controllers/get15Drivers");
const router = Router();

router.get('/', getDrivers)
router.get('/drivers/:id', getDetail)
router.get('/drivers', get15drivers)

module.exports = router;
