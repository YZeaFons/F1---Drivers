const { Driver } = require("../db")

const getDrivers = async (req, res) => {
    try {
        const allDrivers = await Driver.findAll()
        return res.status(200).json(allDrivers)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = getDrivers