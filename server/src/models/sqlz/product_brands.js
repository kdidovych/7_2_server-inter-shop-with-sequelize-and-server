const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_brands', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Brand Id",
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      comment: "subbrands may have same title",
      unique: "brands_unique"
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Brand Title"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Brand Description"
    }
  }, {
    sequelize,
    tableName: 'product_brands',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "brands_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "brands_unique",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
