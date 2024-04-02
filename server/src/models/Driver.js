const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    forename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'unknown-image.png'
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // height: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // teams: {
    //   type: DataTypes.STRING,
    // },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numberBirthday: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    source: {
      type: DataTypes.STRING,
      defaultValue: 'database'
    }
  }, { timestamps: false });
};