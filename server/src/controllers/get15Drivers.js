const axios = require("axios");
const { Driver } = require("../db");
const { Op } = require("sequelize");
const API = 'http://localhost:5000/drivers'

const get15drivers = async (req, res) => {

    try {
        const nombreBuscado = req.query.name
        if (!nombreBuscado) {
            return res.status(500).json({ error: 'debes ingresar un nombre' });
        }
        const driversBD = await Driver.findAll({
            where: {
                'name': {
                    [Op.iLike]: `%${nombreBuscado}%`
                }
            }
        })
        const { data } = await axios.get(API)
        const driversAPI = data.filter(driver => {
            return new RegExp(nombreBuscado, 'i').test(driver.name.forename)
        })
        const driversfixed = driversAPI.map(element => ({
            id: element.id,
            name: element.name?.forename,
            surname: element.name?.surname,
            image: element.image?.url,
            nationality: element.nationality,
            teams: element.teams,
            description: element.description,
        }))
        const allDrivers = driversBD.concat(driversfixed)
        if (allDrivers.length > 15) allDrivers.slice(0, 15)
        return res.status(200).json(allDrivers)
    } catch (error) {
        return res.status(400).send('No fue posible hacer la busqueda')
    }
}
module.exports = get15drivers 
