const { Op } = require("sequelize")
const { Driver, Teams } = require("../db")

const postDriver = async (req, res) => {
    try {
        const { forename, surname, description, image, nationality, teams, birthday } = req.body
        const driverExists = await Driver.findOne({
            where: {
                forename,
                surname,
            }
        })

        if (driverExists) {
            return res.json({ error: 'El driver ingresado ya existe en la base de datos' });
        }

        const numberBirthday = new Date(birthday).getTime()
        if (forename && surname && description && image && nationality && birthday) {
            const newDriver = await Driver.create({ forename, surname, description, image, nationality, birthday, numberBirthday })

            const createdDrivers = await Driver.findAll()
            const arrayTeams = teams.split(',')
            if (arrayTeams.length) {
                const teams = await Teams.findAll({ where: { Name: arrayTeams } })
                await newDriver.addTeams(teams)
            }

            return res.status(200).json(createdDrivers)
        }
        return res.status(404).send('Faltan datos')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = postDriver