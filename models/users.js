'use strict';
const { hashingPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: (ins, opt) => {
        ins.password = hashingPassword(ins.password)
      }
    }
  });
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};