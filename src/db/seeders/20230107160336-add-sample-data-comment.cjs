'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {id: 1, userId: 2, threadId: 1, description: 'This is a comment on the first thread' },
      {id: 2, userId: 1, threadId: 2, description: 'This is a comment on the second thread' },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
