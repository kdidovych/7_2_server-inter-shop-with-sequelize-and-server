const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_items', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Order Item Id",
      primaryKey: true
    },
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "order Id reference",
      references: {
        model: 'orders',
        key: 'id'
      },
      onDelete: 'CASCADE' // had to add this manually
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Product Id reference",
      references: {
        model: 'products',
        key: 'id'
      },
      onDelete: 'CASCADE' // had to add this manually
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Product ordered Qty"
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: "Price per 1 item (when order was placed)"
    }
  }, {
    sequelize,
    tableName: 'order_items',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "order_items_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
