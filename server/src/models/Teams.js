const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
    Sequelize.define('Teams', {
        ID: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, { timestamps: false })
}