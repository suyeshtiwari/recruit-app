const { DataTypes } = require('sequelize');
//const team = require('../models/team.model');
module.exports = model;
function model(sequelize) {
    const attributes = {
      members_id:{ type: DataTypes.INTEGER, allowNull: false ,primaryKey: true, autoIncrement: true,},
      members_name: { type: DataTypes.STRING },
      members_roles: { type: DataTypes.STRING },
      members_select: { type: DataTypes.STRING },
 
      // Add other attributes as needed
    };
  
    const options = {
      timestamps: false,
      // Additional options if needed
    };
  
    return sequelize.define('teamMember', attributes, options);
  }