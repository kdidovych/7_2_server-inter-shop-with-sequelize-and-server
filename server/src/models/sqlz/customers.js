const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Customer Id",
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Customer Email",
      unique: "customers_unique"
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "First Name"
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Last Name"
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Phone number"
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Avatar image"
    }
  }, {
    sequelize,
    tableName: 'customers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customers_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "customers_unique",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
