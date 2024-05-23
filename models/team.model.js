const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
      team_id:{ type: DataTypes.INTEGER, allowNull: false ,primaryKey: true, autoIncrement: true,},
      team_name: { type: DataTypes.STRING },
      team_description: { type: DataTypes.STRING },
    
      // Add other attributes as needed
    };
  
    const options = {
      timestamps: false,
      // Additional options if needed
    };

    return sequelize.define('team', attributes, options);
  }