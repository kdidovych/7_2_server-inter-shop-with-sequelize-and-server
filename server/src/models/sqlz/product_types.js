const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_types', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Product Type Id",
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      unique: "product_types_unique"
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Description"
    }
  }, {
    sequelize,
    tableName: 'product_types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_types_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "product_types_unique",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
