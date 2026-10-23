const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_statuses', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Order Status Id",
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Order Status Code (pending)",
      unique: "order_statuses_unique"
    },
    label: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      comment: "Order Status Label"
    }
  }, {
    sequelize,
    tableName: 'order_statuses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "order_statuses_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "order_statuses_unique",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
