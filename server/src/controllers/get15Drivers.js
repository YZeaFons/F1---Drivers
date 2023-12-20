const { Driver } = require("../db");
const getDrivers = require("./getDrivers");

const get15drivers = async (req, res) => {
    // const { name } = req.query
    // return res.status(200).json(name)


    // try {
    //     const { name } = req.query
    //     const allDrivers = await getDrivers()
    //     console.log(allDrivers);
    //     console.log(name);
    //     const response = allDrivers.filter(value => {
    //         return value.forename === name
    //     })
    //     return res.status(200).json(response)
    // } catch (error) {
    //     throw new Error('Busqueda no fue posible')
    // }


    try {
        const driversBD = await Driver.findAll({where:{}})
        return res.status(200).json(response)
    } catch (error) {
        throw new Error('Busqueda no fue posible')
    }
}
module.exports = get15drivers 
