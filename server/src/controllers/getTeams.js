const { Teams } = require("../db")

const getTeams = async (req, res) => {
    try {
        const teams = await Teams.findAll()
        res.status(200).json(teams)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = getTeams


