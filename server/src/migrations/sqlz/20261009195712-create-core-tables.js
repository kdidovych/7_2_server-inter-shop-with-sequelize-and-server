'use strict';

const sqlzModels = require('../../models/sqlz');
const MODELS = [
    'categories',
    'customers',
    'order_statuses',
    'product_brands',
    'product_models',
    'product_types',
    'stores',
    'orders',
    'products',
    'inventory',
    'product_categories',
    'order_items',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        for (const modelName of MODELS) {
            const model = sqlzModels[modelName];
            const attributes = { ...model.getAttributes() };
            const associations = model.associations;
            Object.values(associations).forEach(association => {
                if (model === association.target) {
                    const foreignKey = association.foreignKey;
                    attributes[foreignKey] = {
                        ...attributes[foreignKey],
                        onDelete: association.options.onDelete,
                    };
                }
            });

            await queryInterface.createTable(model.tableName, attributes);

        }
    },

    async down(queryInterface, Sequelize) {
        for (const modelName of MODELS.toReversed()) {
            const model = sqlzModels[modelName];
            await queryInterface.dropTable(model.tableName);
        }
    }
};
