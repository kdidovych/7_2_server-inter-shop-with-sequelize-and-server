const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Category Id",
      primaryKey: true
    },
    name: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      comment: "Category Name"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Category Description"
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Parent Category Id",
      references: {
        model: 'categories',
        key: 'id'
      },
      onDelete: 'CASCADE' // had to add this manually
    }
  }, {
    sequelize,
    tableName: 'categories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "categories_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
