const express = require('express');
const router = express.Router({ caseSensitive: true, strict: true });
const apiValidators = require('../../middlewares/validators/api/entities.mw');
const schemes = require('../../validationSchemes/models');

const nameEntities = {
    'categories': require('../../controllers/api/categories'),
    'customers': require('../../controllers/api/customers'),
    'inventory': require('../../controllers/api/inventory'),
    'order_items': require('../../controllers/api/order_items'),
    'order_statuses': require('../../controllers/api/order_statuses'),
    'orders': require('../../controllers/api/orders'),
    'product_brands': require('../../controllers/api/product_brands'),
    'product_categories': require('../../controllers/api/product_categories'),
    'product_models': require('../../controllers/api/product_models'),
    'product_types': require('../../controllers/api/product_types'),
    'products': require('../../controllers/api/products'),
    'stores': require('../../controllers/api/stores')
}
Object.keys(nameEntities).forEach(name => {
    router
        .get(`/${name}`, nameEntities[name].getAll)
        .get(`/${name}/:id`, apiValidators.validateGetById, nameEntities[name].getById)
        .post(`/${name}`,
            (...params) => apiValidators.validateCreateOne(...params, schemes[name]),
            nameEntities[name].createOne)
        .put(`/${name}`,
            (...params) => apiValidators.validateUpdateOne(...params, schemes[name]),
            nameEntities[name].updateOne)
        .delete(`/${name}/:id`, apiValidators.validateDeleteById, nameEntities[name].deleteById)
});

module.exports = router;
