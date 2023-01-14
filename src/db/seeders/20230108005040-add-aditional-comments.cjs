'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Comments', [
			{ userId: 2, threadId: 1, description: 'This is another comment on the first thread' },
			{ userId: 1, threadId: 2, description: 'This is another comment on the second thread' },
		], {});
	},

	async down (queryInterface, Sequelize) {
		/**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	}
};
