const { Team } = require("../db")

const getTeams = async (req, res) => {
    try {
        const teams = await Team.findAll()
        res.status(200).json(teams)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = getTeams


