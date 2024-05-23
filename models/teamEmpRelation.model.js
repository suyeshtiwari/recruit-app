const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
      role_id:{ type: DataTypes.INTEGER, allowNull: false ,primaryKey: true, autoIncrement: true,},
      role: { type: DataTypes.STRING },
  //    team_description: { type: DataTypes.STRING },  teamTeamId  empProfileEmpId
  // teamTeamId: {
  //   type: DataTypes.INTEGER,
   
  //   references: {
  //     model: db.team, // 'Movies' would also work
  
  //   }
  // },
  // empProfileEmpId: {
  //   type: DataTypes.INTEGER,
 
  //   references: {
  //     model: db.Emp_profile, // 'Actors' would also work
    
  //   }
 // }
      // Add other attributes as needed
    };
  
    const options = {
      timestamps: false,
      // Additional options if needed
    };

    return sequelize.define('team_emp_relation', attributes, options);
  }