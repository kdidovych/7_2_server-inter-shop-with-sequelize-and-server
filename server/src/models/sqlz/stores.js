const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stores', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Store Id",
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      comment: "Store Code (NewYork-13)",
      unique: "stores_unique"
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Name"
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Address"
    }
  }, {
    sequelize,
    tableName: 'stores',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "stores_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "stores_unique",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
