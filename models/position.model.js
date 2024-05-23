const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
  const attributes = {
    position_title: { type: DataTypes.STRING, allowNull: false },
    project_id: { type: DataTypes.INTEGER, allowNull: false },
    experience: { type: DataTypes.INTEGER, allowNull: false },
    department: { type: DataTypes.STRING },
    location: { type: DataTypes.STRING },
    num_of_positions: { type: DataTypes.INTEGER },
    description: { type: DataTypes.TEXT },
    // Add other attributes as needed
  };

  const options = {
    timestamps: false,
    // Additional options if needed
  };

  return sequelize.define('position', attributes, options);
}
