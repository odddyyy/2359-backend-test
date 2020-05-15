'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     try {
        await queryInterface.addColumn('Tasks', 'start', Sequelize.STRING),
        await queryInterface.addColumn('Tasks', 'end', Sequelize.STRING)
        return Promise.resolve()
     } catch (err) {
        return Promise.reject(err)
     }
        
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      try {
        await queryInterface.dropTable('Task', 'start'),
        await queryInterface.removeColumn('Task', 'end')
        return Promise.resolve()
      } catch (err) {
        return Promise.reject(err)
      }
        
  }
};
