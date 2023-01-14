'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {id: 1, firstName: 'Test', lastName: 'User 1', userName: 'testuser1' },
      {id: 2, firstName: 'Test', lastName: 'User 2', userName: 'testuser2' },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
