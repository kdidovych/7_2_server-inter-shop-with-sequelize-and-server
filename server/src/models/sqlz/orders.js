const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Order Id",
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      comment: "Order Number (Human Friendly)",
      unique: "orders_unique"
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    customer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Customer Id",
      references: {
        model: 'customers',
        key: 'id'
      },
      onDelete: 'CASCADE' // had to add this manually
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: "Total Price"
    },
    is_paid: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "Is Transaction Success"
    },
    status_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Order Status Id",
      references: {
        model: 'order_statuses',
        key: 'id'
      },
      onDelete: 'CASCADE' // had to add this manually
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orders_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "orders_unique",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
