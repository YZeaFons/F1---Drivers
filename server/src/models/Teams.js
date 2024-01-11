const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
    Sequelize.define('Teams', {
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, { timestamps: false })
}