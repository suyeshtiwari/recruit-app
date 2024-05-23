const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
  // create db if it doesn't already exist
  const { host, port, user, password, database } = config.database;
  console.log(host, port, user, password);
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: 'mysql',
  });

  // init models and add them to the exported db object
  db.Account = require('../models/account.model')(sequelize);
  db.RefreshToken = require('../models/refresh-token.model')(sequelize);
  db.Emp_profile = require('../models/empProfile.model')(sequelize);
  db.teamMember = require('../models/teamMember.model')(sequelize);
  db.Key_Skills = require('../models/skill.model')(sequelize);
  db.Position = require('../models/position.model')(sequelize);
  db.Requisition = require('../models/requisition.model')(sequelize);

  // define relationships
  db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
  db.RefreshToken.belongsTo(db.Account);
  db.Requisition.belongsToMany(db.Key_Skills, {
    through: 'requisiton-skill',
    as: 'skills',
    foreignKey: 'req_id',
  });
  db.Key_Skills.belongsToMany(db.Requisition, {
    through: 'requisiton-skill',
    as: 'requisitions',
    foreignKey: 'skill_id',
  });
  db.team = require('../models/team.model')(sequelize);
  db.team_emp_relation = require('../models/teamEmpRelation.model')(sequelize);

  db.Emp_profile.belongsToMany(db.Key_Skills, {
    through: 'emp_skill',
  });
  db.Key_Skills.belongsToMany(db.Emp_profile, { through: 'emp_skill' });

  db.team.belongsToMany(db.Emp_profile, {
    through: db.team_emp_relation,
    foreignKey: 'teamTeamId',
  });
  db.Emp_profile.belongsToMany(db.team, {
    through: db.team_emp_relation,
    foreignKey: 'empProfileEmpId',
  });
  db.sequelize = sequelize;
  //  db.teamMember.hasOne(db.team, {
  // foreignKey: 'members_name', // This will create a userId field in the UserProfile table
  // onDelete: 'CASCADE' // Optional, this will delete the user's profile when the user is deleted
  // });
  // db.team.belongsTo(db.teamMember, {
  // foreignKey: 'members_name', // This should match the foreign key in the User model
  //  onDelete: 'CASCADE' // Optional, this will delete the profile when the associated user is deleted
  //  });
  // sync all models with database
  await sequelize.sync();
}
