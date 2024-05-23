const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
  const attributes = {
    req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    skill_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    // Add other attributes as needed
  };

  const options = {
    timestamps: false,
    // Additional options if needed
  };

  return sequelize.define('req_skill', attributes, options);
}
