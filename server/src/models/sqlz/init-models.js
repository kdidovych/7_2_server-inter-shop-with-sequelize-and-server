var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _customers = require("./customers");
var _inventory = require("./inventory");
var _order_items = require("./order_items");
var _order_statuses = require("./order_statuses");
var _orders = require("./orders");
var _product_brands = require("./product_brands");
var _product_categories = require("./product_categories");
var _product_models = require("./product_models");
var _product_types = require("./product_types");
var _products = require("./products");
var _stores = require("./stores");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var inventory = _inventory(sequelize, DataTypes);
  var order_items = _order_items(sequelize, DataTypes);
  var order_statuses = _order_statuses(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var product_brands = _product_brands(sequelize, DataTypes);
  var product_categories = _product_categories(sequelize, DataTypes);
  var product_models = _product_models(sequelize, DataTypes);
  var product_types = _product_types(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var stores = _stores(sequelize, DataTypes);

  categories.belongsTo(categories, { as: "parent", foreignKey: "parent_id"});
  categories.hasMany(categories, { as: "categories", foreignKey: "parent_id", onDelete: 'CASCADE'});
  product_categories.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(product_categories, { as: "product_categories", foreignKey: "category_id", onDelete: 'CASCADE'});
  orders.belongsTo(customers, { as: "customer", foreignKey: "customer_id"});
  customers.hasMany(orders, { as: "orders", foreignKey: "customer_id", onDelete: 'CASCADE'});
  orders.belongsTo(order_statuses, { as: "status", foreignKey: "status_id"});
  order_statuses.hasMany(orders, { as: "orders", foreignKey: "status_id", onDelete: 'CASCADE'});
  order_items.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(order_items, { as: "order_items", foreignKey: "order_id", onDelete: 'CASCADE'});
  product_models.belongsTo(product_brands, { as: "brand", foreignKey: "brand_id"});
  product_brands.hasMany(product_models, { as: "product_models", foreignKey: "brand_id", onDelete: 'CASCADE'});
  products.belongsTo(product_models, { as: "model", foreignKey: "model_id"});
  product_models.hasMany(products, { as: "products", foreignKey: "model_id", onDelete: 'CASCADE'});
  products.belongsTo(product_types, { as: "type", foreignKey: "type_id"});
  product_types.hasMany(products, { as: "products", foreignKey: "type_id", onDelete: 'CASCADE'});
  inventory.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(inventory, { as: "inventories", foreignKey: "product_id", onDelete: 'CASCADE'});
  order_items.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(order_items, { as: "order_items", foreignKey: "product_id", onDelete: 'CASCADE'});
  product_categories.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(product_categories, { as: "product_categories", foreignKey: "product_id", onDelete: 'CASCADE'});
  inventory.belongsTo(stores, { as: "store", foreignKey: "store_id"});
  stores.hasMany(inventory, { as: "inventories", foreignKey: "store_id", onDelete: 'CASCADE'});

  return {
    categories,
    customers,
    inventory,
    order_items,
    order_statuses,
    orders,
    product_brands,
    product_categories,
    product_models,
    product_types,
    products,
    stores,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
