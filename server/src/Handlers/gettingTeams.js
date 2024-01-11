const axios = require("axios");
const { Teams } = require("../db");

const API = 'http://localhost:5000/drivers'

const gettingTeams = async (req, res) => {
    try {
        const { data } = await axios.get(API)
        let newArray = data.flatMap(element => (element.teams?.split(',')))
        newArray = newArray.filter(element => element !== undefined)
        newArray = newArray.map(element => element.trim())
        newArray = [...new Set(newArray)]
        newArray = newArray.sort()


        if (newArray.length === 0) {
            return res.status(401).send('No se recibieron datos')
        }
        await Promise.all(
            newArray.map(async element => {
                await Teams.findOrCreate({ where: { Name: element } })
            })
        )
        // const teamsBD = await Team.findAll()
        // return res.json(teamsBD)


    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = { gettingTeams }
