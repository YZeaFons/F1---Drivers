const { Op } = require("sequelize")
const { Driver, Teams } = require("../db")
const API = 'http://localhost:5000/drivers'
const { default: axios } = require("axios")

const postDriver = async (req, res) => {
    try {
        const { forename, surname, description, image, nationality, teams, birthday } = req.body
        const driverExists = await Driver.findOne({
            where: {
                forename: { [Op.iLike]: `%${forename.toLowerCase()}%` },
                surname: { [Op.iLike]: `%${surname.toLowerCase()}%` },
            }
        })

        const { data } = await axios.get(API)
        const driversAPI = data.map(element => ({
            id: element.id.toString(),
            forename: element.name?.forename,
            surname: element.name?.surname,
        }));
        const driverExistsAPI = driversAPI.filter((item) => {
            return (item.forename.toLowerCase() === forename.toLowerCase() &&
                item.surname.toLowerCase() === surname.toLowerCase())
        }
        )

        if (driverExists || driverExistsAPI.length) {
            return res.json({ error: 'El driver ingresado ya existe' });
        }

        const numberBirthday = new Date(birthday).getTime()
        if (forename && surname && description && image && nationality && birthday) {
            const newDriver = await Driver.create({ forename, surname, description, image, nationality, birthday, numberBirthday })

            const arrayTeams = teams.split(',')
            if (arrayTeams.length) {
                const teams = await Teams.findAll({ where: { Name: arrayTeams } })
                await newDriver.addTeams(teams)
            }

            const createdDrivers = await Driver.findAll({
                include: [{
                    model: Teams,
                    as: 'teams'
                }]
            })
            return res.status(200).json(createdDrivers)
        }
        return res.status(404).send('Faltan datos')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = postDriver