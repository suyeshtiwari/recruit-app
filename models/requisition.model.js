const { DataTypes } = require('sequelize');
const Req_skill = require('./req_skill.model');

module.exports = model;

function model(sequelize) {
  const attributes = {
    requisition_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    requisition_name: { type: DataTypes.STRING, allowNull: true },

    experience: { type: DataTypes.INTEGER },
    location: { type: DataTypes.STRING },
    salary: { type: DataTypes.STRING },
    posted_date: { type: DataTypes.TEXT },
    opening: { type: DataTypes.INTEGER, allowNull: true },
    department: { type: DataTypes.STRING },
    job_description: { type: DataTypes.STRING, allowNull: true },
    education: { type: DataTypes.STRING },
    job_role: { type: DataTypes.STRING },
    employment_type: { type: DataTypes.STRING },
    industry_type: { type: DataTypes.STRING },
    role_category: { type: DataTypes.STRING },

    // Add other attributes as needed
  };

  const options = {
    timestamps: false,
    // Additional options if needed
  };

  return sequelize.define('requisition', attributes, options);
}
