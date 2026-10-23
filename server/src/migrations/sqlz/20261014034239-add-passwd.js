'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const tableInfo = await queryInterface.describeTable('customers');
        if (!tableInfo.password) {
            await queryInterface.addColumn('customers', 'password', {
                type: Sequelize.STRING,
                allowNull: true
            });
        }
    },

    async down(queryInterface, Sequelize) {
        const tableInfo = await queryInterface.describeTable('customers');
        if (tableInfo.password) {
            await queryInterface.removeColumn('customers', 'password');
        }
    }
};
