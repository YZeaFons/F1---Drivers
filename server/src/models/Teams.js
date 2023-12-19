const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
    Sequelize.define('Team', {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false })
}