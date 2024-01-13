const { Op } = require("sequelize")
const { Driver, Teams } = require("../db")

const postDriver = async (req, res) => {
    try {
        const { forename, surname, description, image, nationality, teams, birthday } = req.body
        if (forename && surname && description && image && nationality && birthday) {
            await Driver.create({ forename, surname, description, image, nationality, birthday })
            const createdDrivers = await Driver.findAll()

            const arrayTeams = teams.split(',')
            const team = await Teams.findAll({ where: { Name: { [Op.in]: arrayTeams } } })
            // console.log(team);
            // await Teams.addTeams(team)
            return res.status(200).json(createdDrivers)
        }
        return res.status(404).send('Faltan datos')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = postDriver