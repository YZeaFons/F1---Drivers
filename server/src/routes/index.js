const { Router } = require("express");
const getDrivers = require("../controllers/getDrivers");
const router = Router();

router.get('/driver', getDrivers)

module.exports = router;
