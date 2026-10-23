const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_models', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Product Model Id",
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Title or Brand Model Number"
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "brand_id",
      references: {
        model: 'product_brands',
        key: 'id'
      },
      onDelete: 'CASCADE' // had to add this manually
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "Model Description"
    }
  }, {
    sequelize,
    tableName: 'product_models',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_models_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
