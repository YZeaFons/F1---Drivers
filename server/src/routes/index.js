const { Router } = require("express");
const getDrivers = require("../controllers/getDrivers");
const getDetail = require("../controllers/getDetail");
const get15drivers = require("../controllers/get15Drivers");
const postDriver = require("../controllers/postDriver");
const router = Router();

router.get('/driver', getDrivers)
router.get('/driver/:id', getDetail)
router.get('/drivers/name', get15drivers)
router.post('/driver', postDriver)

module.exports = router;
