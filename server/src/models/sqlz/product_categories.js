const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_categories', {
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Product Id Refference",
      references: {
        model: 'products',
        key: 'id'
      },
      onDelete: 'CASCADE', // had to add this manually
      unique: "product_categories_unique"
    },
    category_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Category Id Refference",
      references: {
        model: 'categories',
        key: 'id'
      },
      onDelete: 'CASCADE', // had to add this manually
      unique: "product_categories_unique"
    }
  }, {
    sequelize,
    tableName: 'product_categories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_categories_unique",
        unique: true,
        fields: [
          { name: "product_id" },
          { name: "category_id" },
        ]
      },
    ]
  });
};
