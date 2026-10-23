const yup = require('yup');

module.exports.categories = yup.object().shape({
    id: yup.number()
        .integer('Id must be a whole number')
        .notRequired(),
    name: yup.string()
        .min(1)
        .max(255)
        .required('Name'),
    description: yup.string()
        .notRequired(),
    parent_id: yup.number()
        .nullable()
        .integer('Parent Id must be a whole number')
        .notRequired()
});

module.exports.inventory = yup.object().shape({
    store_id: yup.number()
        .integer('Store Id must be a whole number')
        .required('Store Id is required field'),
    product_id: yup.number()
        .integer('Product Id must be a whole number')
        .required('Product Id is required field'),
    amount: yup.number()
        .integer('Amount must be a whole number')
        .required('Amount is required field'),
});

module.exports.product_categories = yup.object().shape({
    product_id: yup.number()
        .integer('Product Id must be a whole number')
        .required('Product Id is a required field'),
    category_id: yup.number()
        .integer('Category Id must be a whole number')
        .required('Category Id is a required field')
});

module.exports.customers = yup.object().shape({
    id: yup.number()
        .integer('Id must be a whole number')
        .notRequired(),
    email: yup.string()
        .email('Must be a real email address')
        .required('Email is a required field'),
    password: yup.string()
        .min(4)
        .max(255)
        .nullable()
        .notRequired(),
    first_name: yup.string()
        .required('First name is a required field'),
    last_name: yup.string()
        .required('Last name is a required field'),
    phone: yup.string()
        .nullable()
        .notRequired()
});

module.exports.order_items = yup.object().shape({
    id: yup.number()
        .integer('Id must be a whole number')
        .notRequired(),
    order_id: yup.number()
        .integer('Order Id must be a whole number')
        .required('Order Id is a required field'),
    product_id: yup.number()
        .integer('Product Id must be a whole number')
        .required('Product Id is a required field'),
    amount: yup.number()
        .integer('Amount must be a whole number')
        .min(1, 'Amount must be positive')
        .required('Amount is a required field'),
    price: yup.number()
        .min(0, 'Price cannot be negative')
        .required('Price is a required field')
});

module.exports.order_statuses = yup.object().shape({
    id: yup.number()
        .integer('Id must be a whole number')
        .notRequired(),
    code: yup.string()
        .required('Code is a required field'),
    label: yup.string()
        .nullable()
        .notRequired()
});

module.exports.orders = yup.object().shape({
    id: yup.number()
        .integer('Id must be a whole number')
        .notRequired(),
    code: yup.string()
        .required('Code is a required field'),
    date: yup.string()
        .datetime({message: 'Date must be a valid ISO string timestamp'})
        .notRequired(),
    customer_id: yup.number()
        .integer('Customer Id must be a whole number')
        .required('Customer Id is a required field'),
    amount: yup.number()
        .min(0, 'Amount cannot be negative')
        .required('Amount is a required field'),
    is_paid: yup.boolean()
        .nullable()
        .notRequired(),
    status_id: yup.number()
        .integer('Status Id must be a whole number')
        .required('Status Id is a required field')
});

module.exports.product_brands = yup.object().shape({
    id: yup.number()
        .integer('Id must be a whole number')
        .notRequired(),
    code: yup.string()
        .required('Code is a required field'),
    title: yup.string()
        .nullable()
        .notRequired(),
    description: yup.string()
        .nullable()
        .notRequired()
});

module.exports.product_models = yup.object().shape({
    id: yup.number()
        .integer('Id must be a whole number')
        .notRequired(),
    title: yup.string()
        .required('Title is a required field'),
    brand_id: yup.number()
        .integer('Brand Id must be a whole number')
        .nullable()
        .notRequired(),
    description: yup.string()
        .nullable()
        .notRequired()
});

module.exports.product_types = yup.object().shape({
    id: yup.number()
        .integer('Id must be a whole number')
        .notRequired(),
    code: yup.string()
        .required('Code is a required field'),
    description: yup.string()
        .nullable()
        .notRequired()
});

module.exports.products = yup.object().shape({
    id: yup.number()
        .integer('Id must be a whole number')
        .notRequired(),
    sku: yup.string()
        .required('SKU is a required field'),
    name: yup.string()
        .nullable()
        .notRequired(),
    description: yup.string()
        .nullable()
        .notRequired(),
    model_id: yup.number()
        .integer('Model Id must be a whole number')
        .nullable()
        .notRequired(),
    price: yup.number()
        .min(0, 'Price cannot be negative')
        .required('Price is a required field'),
    is_enabled: yup.boolean()
        .notRequired(),
    type_id: yup.number()
        .integer('Type Id must be a whole number')
        .required('Type Id is a required field')
});

module.exports.stores = yup.object().shape({
    id: yup.number()
        .integer('Id must be a whole number')
        .notRequired(),
    code: yup.string()
        .required('Code is a required field'),
    name: yup.string()
        .required('Name is a required field'),
    address: yup.string()
        .nullable()
        .notRequired()
});
