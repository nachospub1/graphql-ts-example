'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Threads', [
      {id: 1, userId: 1, name: 'Thread 1', description: 'This is the first thread' },
      {id: 2, userId: 2, name: 'Thread 2', description: 'This is the second thread' },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Threads', null, {});
  }
};
