const gettingTeams = require("../Handlers/gettingTeams")
const { Team } = require("../db")

const getTeams = async (req, res) => {
    try {
        const teams = await gettingTeams()
        console.log(teams);
        if (teams.length === 0) {
            return res.status(401).send('No se recibieron datos')
        }
        await Promise.all(
            teams.map(async element => {
                await Team.findOrCreate({ where: { name: element } })
            })
        )
        const teamsBD = await Team.findAll()
        return res.json(teamsBD)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = getTeams


