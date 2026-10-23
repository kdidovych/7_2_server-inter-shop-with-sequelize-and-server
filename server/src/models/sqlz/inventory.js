const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventory', {
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Store Id",
      references: {
        model: 'stores',
        key: 'id'
      },
      onDelete: 'CASCADE', // had to add this manually
      unique: "inventory_unique"
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Product Id",
      references: {
        model: 'products',
        key: 'id'
      },
      onDelete: 'CASCADE', // had to add this manually
      unique: "inventory_unique"
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Amount"
    }
  }, {
    sequelize,
    tableName: 'inventory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "inventory_unique",
        unique: true,
        fields: [
          { name: "store_id" },
          { name: "product_id" },
        ]
      },
    ]
  });
};
