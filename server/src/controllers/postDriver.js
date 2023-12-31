const { Driver } = require("../db")

const postDriver = async (req, res) => {
    try {
        const { name, surname, description, image, nationality, teams, birthday } = req.body
        if (name && surname && description && image && nationality && birthday) {
            await Driver.findOrCreate({ where: { name, surname, description, image, nationality, teams, birthday } })
            const createdDrivers = Driver.findAll()
            return res.status(200).json(createdDrivers)
        }
        return res.status(404).send('Faltan datos')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = postDriver