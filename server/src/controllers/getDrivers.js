const { default: axios } = require("axios")
const { Driver } = require("../db")
const API = 'http://localhost:5000/drivers'

const getDrivers = async (req, res) => {
    try {
        const driversBD = await Driver.findAll()
        const { data } = await axios.get(API)
        const driversAPI = data.map(element => ({
            id: element.id,
            name: element.name?.forename,
            surname: element.name?.surname,
            teams: element.teams,
            image: element.image?.url,
            // source: 'API'
        }));
        const allDrivers = driversBD.concat(driversAPI)
        return res.status(200).json(allDrivers)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = getDrivers