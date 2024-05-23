const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
  const attributes = {
    skill_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    skill_name: { type: DataTypes.STRING, allowNull: false },
    skill_desc: { type: DataTypes.STRING, allowNull: false },
    skill_isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, // or false depending on your requirements
    },

    // Add other attributes as needed
  };

  const options = {
    timestamps: false,
    // Additional options if needed
  };

  return sequelize.define('key_skills', attributes, options);
}
