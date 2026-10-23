const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "product id",
      primaryKey: true
    },
    sku: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      comment: "unique human-frendly identifier",
      unique: "products_unique"
    },
    name: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      comment: "Product Name (Title)"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Product Description"
    },
    model_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "Model Id (Attributes Values)",
      references: {
        model: 'product_models',
        key: 'id'
      },
      onDelete: 'CASCADE' // had to add this manually
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      comment: "Product Price"
    },
    is_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Product Type Id",
      references: {
        model: 'product_types',
        key: 'id'
      },
      onDelete: 'CASCADE' // had to add this manually
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "products_id_idx",
        fields: [
          { name: "id" },
          { name: "sku" },
        ]
      },
      {
        name: "products_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "products_unique",
        unique: true,
        fields: [
          { name: "sku" },
        ]
      },
    ]
  });
};
