'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable('customers');
    if (!tableInfo.avatar) {
      await queryInterface.addColumn('customers', 'avatar', {
        type: Sequelize.STRING,
        allowNull: true
      });
    }
  },

  async down (queryInterface, Sequelize) {
    const tableInfo = await queryInterface.describeTable('customers');
    if (tableInfo.avatar) {
      await queryInterface.removeColumn('customers', 'avatar');
    }
  }
};
