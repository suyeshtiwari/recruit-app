const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
  const attributes = {
    emp_id:{ type: DataTypes.INTEGER, allowNull: false ,primaryKey: true, autoIncrement: true,},
    emp_name: { type: DataTypes.STRING },
    emp_email: { type: DataTypes.STRING },
    emp_address: { type: DataTypes.STRING },
    emp_phonenumber: { type: DataTypes.INTEGER, allowNull: false },
    department: { type: DataTypes.STRING },
    experience: { type: DataTypes.INTEGER, allowNull: false },
    qualification: { type: DataTypes.STRING },
    current_jobtitle: { type: DataTypes.STRING },
    employment_type: { type: DataTypes.STRING },
  // skill_id:{type:DataTypes.INTEGER, REFERENCES : ("db.Key_Skills") }
    // Add other attributes as needed
  };

  const options = {
    timestamps: false,
    // Additional options if needed
  };

  return sequelize.define('emp_profile', attributes, options);
}