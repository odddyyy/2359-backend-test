'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    task: DataTypes.STRING,
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    start: DataTypes.STRING,
    end: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};