const { Driver, Teams } = require("../db")
const axios = require('axios')
const API = 'http://localhost:5000/drivers'

// ------Handlers de GetDetail---------------
const findDriver = async (id, origin) => {
    try {
        if (origin === 'database') {
            return await Driver.findByPk(id)
        }
        return findDriverAPI(id)
    } catch (error) {
        throw new Error('Error en el origen de los datos')
    }
}

const findDriverAPI = async (id) => {
    try {
        const { data } = await axios.get(`${API}/${id}`)
        console.log('Esta es Back', data);
        const driver = {
            id: data.id,
            forename: data.name?.forename,
            surname: data.name?.surname,
            image: data.image?.url,
            birthday: data.dob,
            nationality: data.nationality,
            teams: data.teams,
            description: data.description
        }
        return driver.forename
            ? driver
            : new Error('Not Found')
    } catch (error) {
        throw new Error('Error al obtener los datos desde la API')
    }
}

const getDetail = async (req, res) => {
    const { id } = req.params
    const origin = req.query.source
    //  || 'API'
    try {
        const driver = await findDriver(Number(id), origin)
        if (driver) {
            return res.status(200).json(driver)
        }
        return res.status(500).send('Driver no encontrado')
    } catch (error) {
        res.status(404).send('Error al buscar el driver')
    }
}

module.exports = getDetail