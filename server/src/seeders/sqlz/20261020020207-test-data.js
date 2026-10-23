'use strict';

const seedData = {
    categories: [
        {id: 1, name: 'Electronics', description: 'Consumer electronics and smart devices', parent_id: null},
        {id: 2, name: 'Smartphones', description: 'Mobile phones and accessories', parent_id: 1},
        {id: 3, name: 'Laptops', description: 'Portable computers and workstations', parent_id: 1},
        {id: 4, name: 'Audio', description: 'Headphones, speakers, and sound devices', parent_id: 1},
        {id: 5, name: 'Home appliances', description: 'Household smart and classic devices', parent_id: 1},
        {id: 6, name: 'Sports', description: 'Sporting equipment and accessories', parent_id: null},
    ],
    customers: [
        {id: 1, email: 'anna.petrenko@gmail.com', first_name: 'Anna', last_name: 'Petrenko', phone: '+380501234567'},
        {
            id: 2,
            email: 'maksym.shevchenko@gmail.com',
            first_name: 'Maksym',
            last_name: 'Shevchenko',
            phone: '+380501234568'
        },
        {id: 3, email: 'olena.koval@gmail.com', first_name: 'Olena', last_name: 'Koval', phone: '+380501234569'},
        {id: 4, email: 'dmytro.bondar@gmail.com', first_name: 'Dmytro', last_name: 'Bondar', phone: '+380501234570'},
        {id: 5, email: 'svitlana.levi@gmail.com', first_name: 'Svitlana', last_name: 'Levi', phone: '+380501234571'},
        {id: 6, email: 'ivan.melnyk@gmail.com', first_name: 'Ivan', last_name: 'Melnyk', phone: '+380501234572'},
        {id: 7, email: 'maria.tkach@gmail.com', first_name: 'Maria', last_name: 'Tkach', phone: '+380501234573'},
        {
            id: 8,
            email: 'andrii.kovalenko@gmail.com',
            first_name: 'Andrii',
            last_name: 'Kovalenko',
            phone: '+380501234574'
        },
        {
            id: 9,
            email: 'iryna.sydorenko@gmail.com',
            first_name: 'Iryna',
            last_name: 'Sydorenko',
            phone: '+380501234575'
        },
    ],
    order_statuses: [
        {id: 1, code: 'pending', label: 'Pending'},
        {id: 2, code: 'paid', label: 'Paid'},
        {id: 3, code: 'shipped', label: 'Shipped'},
        {id: 4, code: 'delivered', label: 'Delivered'},
        {id: 5, code: 'cancelled', label: 'Cancelled'},
    ],
    product_brands: [
        {id: 1, code: 'BR-APPLE', title: 'Apple', description: 'Premium smartphones, laptops, and accessories.'},
        {id: 2, code: 'BR-SAMSUNG', title: 'Samsung', description: 'Consumer electronics and mobile devices.'},
        {id: 3, code: 'BR-XIAOMI', title: 'Xiaomi', description: 'Affordable smart devices and gadgets.'},
        {id: 4, code: 'BR-ASUS', title: 'ASUS', description: 'Gaming and productivity laptops.'},
        {id: 5, code: 'BR-LENOVO', title: 'Lenovo', description: 'Business and portable computing solutions.'},
        {id: 6, code: 'BR-LOGITECH', title: 'Logitech', description: 'Peripherals and audio gear.'},
        {id: 7, code: 'BR-NO-MODELS', title: 'NoModels', description: 'Test brand with no models.'},
    ],
    product_models: [
        {id: 1, title: 'iPhone 15 Pro', brand_id: 1, description: 'Apple flagship smartphone with titanium chassis.'},
        {id: 2, title: 'Galaxy S24 Ultra', brand_id: 2, description: 'Samsung premium smartphone with S Pen support.'},
        {id: 3, title: 'Redmi Note 12 Pro', brand_id: 3, description: 'Xiaomi balanced performer with AMOLED display.'},
        {id: 4, title: 'ZenBook 14', brand_id: 4, description: 'ASUS ultrabook for work and travel.'},
        {
            id: 5,
            title: 'ThinkPad X1 Carbon',
            brand_id: 5,
            description: 'Lenovo business laptop with excellent keyboard.'
        },
        {id: 6, title: 'G435 Wireless', brand_id: 6, description: 'Logitech lightweight gaming headset.'},
        {id: 7, title: 'AirPods Pro 2', brand_id: 1, description: 'Wireless earbuds with active noise cancellation.'},
        {id: 8, title: 'Smart Display', brand_id: 2, description: 'Smart home auxiliary display with voice assistant.'},
    ],
    product_types: [
        {id: 1, code: 'simple', description: 'Single simple unit product'},
        {id: 2, code: 'configurable', description: 'Product with selectable options'},
        {id: 3, code: 'grouped', description: 'Grouped set of related products'},
        {id: 4, code: 'bundle', description: 'Bundled offer of several products'},
        {id: 5, code: 'virtual', description: 'Digital or downloadable product'},
    ],
    stores: [
        {id: 1, code: 'KYIV-01', name: 'Kyiv Central', address: 'Khreshchatyk 1, Kyiv'},
        {id: 2, code: 'LVIV-02', name: 'Lviv Mall', address: 'Svobody Ave 30, Lviv'},
        {id: 3, code: 'ODESA-03', name: 'Odesa Harbor', address: 'Deribasivska 45, Odesa'},
        {id: 4, code: 'KHARKIV-04', name: 'Kharkiv Plaza', address: 'Sumska 12, Kharkiv'},
        {id: 5, code: 'DNIPRO-05', name: 'Dnipro Market', address: 'Soborna 91, Dnipro'},
    ],
    products: [
        {
            id: 1,
            sku: 'SKU-1001',
            name: 'iPhone 15 Pro',
            description: '256GB, Natural Titanium, unlocked.',
            model_id: 1,
            price: 1199.00,
            is_enabled: true,
            type_id: 1
        },
        {
            id: 2,
            sku: 'SKU-1002',
            name: 'Galaxy S24 Ultra',
            description: '512GB, titanium gray, premium camera set.',
            model_id: 2,
            price: 1299.00,
            is_enabled: true,
            type_id: 1
        },
        {
            id: 3,
            sku: 'SKU-1003',
            name: 'Redmi Note 12 Pro',
            description: '8/256GB, stunning display and battery life.',
            model_id: 3,
            price: 399.00,
            is_enabled: true,
            type_id: 1
        },
        {
            id: 4,
            sku: 'SKU-2001',
            name: 'ZenBook 14',
            description: '14-inch ultrabook with OLED display.',
            model_id: 4,
            price: 1499.00,
            is_enabled: true,
            type_id: 2
        },
        {
            id: 5,
            sku: 'SKU-2002',
            name: 'ThinkPad X1 Carbon',
            description: '14-inch business laptop, carbon body.',
            model_id: 5,
            price: 1799.00,
            is_enabled: true,
            type_id: 2
        },
        {
            id: 6,
            sku: 'SKU-3001',
            name: 'Logitech G435',
            description: 'Wireless gaming headset with USB-C dongle.',
            model_id: 6,
            price: 129.99,
            is_enabled: true,
            type_id: 1
        },
        {
            id: 7,
            sku: 'SKU-3002',
            name: 'AirPods Pro 2',
            description: 'Noise-canceling wireless earbuds.',
            model_id: 7,
            price: 249.00,
            is_enabled: true,
            type_id: 1
        },
        {
            id: 8,
            sku: 'SKU-4001',
            name: 'Smart Display 10',
            description: 'Voice-enabled smart home display.',
            model_id: 8,
            price: 349.00,
            is_enabled: true,
            type_id: 5
        },
        {
            id: 9,
            sku: 'SKU-5001',
            name: 'Fitness Smartwatch',
            description: 'Fitness and health tracking watch.',
            model_id: null,
            price: 199.00,
            is_enabled: true,
            type_id: 1
        },
        {
            id: 10,
            sku: 'SKU-6001',
            name: 'Home Speaker Mini',
            description: 'Compact speaker with premium sound.',
            model_id: null,
            price: 89.99,
            is_enabled: true,
            type_id: 1
        },
        {
            id: 11,
            sku: 'SKU-7001',
            name: 'Wireless Mouse',
            description: 'Ergonomic wireless mouse with adjustable DPI.',
            model_id: null,
            price: 49.99,
            is_enabled: true,
            type_id: 1
        },
        {
            id: 12,
            sku: 'SKU-7002',
            name: 'Xiaomi Smart Band',
            description: 'Water-resistant fitness tracker with AMOLED display.',
            model_id: 3,
            price: 179.00,
            is_enabled: true,
            type_id: 1
        },
        {
            id: 13,
            sku: 'SKU-7003',
            name: 'Mechanical Keyboard',
            description: 'Compact mechanical keyboard with tactile switches.',
            model_id: null,
            price: 119.99,
            is_enabled: true,
            type_id: 1
        },
    ],
    orders: [
        {
            id: 1,
            code: 'ORD-1001',
            date: '2024-03-12T10:15:00.000Z',
            customer_id: 1,
            amount: 1458.98,
            is_paid: true,
            status_id: 4
        },
        {
            id: 2,
            code: 'ORD-1002',
            date: '2024-03-14T11:20:00.000Z',
            customer_id: 2,
            amount: 1299.00,
            is_paid: true,
            status_id: 3
        },
        {
            id: 3,
            code: 'ORD-1003',
            date: '2024-03-18T16:45:00.000Z',
            customer_id: 3,
            amount: 1499.00,
            is_paid: true,
            status_id: 4
        },
        {
            id: 4,
            code: 'ORD-1004',
            date: '2024-03-21T09:05:00.000Z',
            customer_id: 4,
            amount: 1799.00,
            is_paid: true,
            status_id: 2
        },
        {
            id: 5,
            code: 'ORD-1005',
            date: '2024-03-25T18:10:00.000Z',
            customer_id: 5,
            amount: 1177.99,
            is_paid: true,
            status_id: 3
        },
        {
            id: 6,
            code: 'ORD-1006',
            date: '2024-03-27T12:00:00.000Z',
            customer_id: 6,
            amount: 349.00,
            is_paid: false,
            status_id: 1
        },
        {
            id: 7,
            code: 'ORD-1007',
            date: '2024-03-27T12:00:00.000Z',
            customer_id: 6,
            amount: 349.00,
            is_paid: false,
            status_id: 1
        },
        {
            id: 8,
            code: 'ORD-1008',
            date: '2024-03-18T16:45:00.000Z',
            customer_id: 3,
            amount: 1499.00,
            is_paid: true,
            status_id: 4
        },
        {
            id: 9,
            code: 'ORD-1009',
            date: '2024-04-02T12:30:00.000Z',
            customer_id: 7,
            amount: 179.98,
            is_paid: true,
            status_id: 4
        },
        {
            id: 10,
            code: 'ORD-1010',
            date: '2024-04-04T09:10:00.000Z',
            customer_id: 8,
            amount: 358.00,
            is_paid: false,
            status_id: 1
        },
        {
            id: 11,
            code: 'ORD-1011',
            date: '2024-04-06T15:45:00.000Z',
            customer_id: 9,
            amount: 368.99,
            is_paid: true,
            status_id: 3
        },
    ],
    inventory: [
        {store_id: 1, product_id: 1, amount: 12},
        {store_id: 1, product_id: 4, amount: 8},
        {store_id: 2, product_id: 2, amount: 15},
        {store_id: 2, product_id: 6, amount: 20},
        {store_id: 3, product_id: 3, amount: 18},
        {store_id: 3, product_id: 7, amount: 26},
        {store_id: 4, product_id: 5, amount: 10},
        {store_id: 4, product_id: 8, amount: 14},
        {store_id: 5, product_id: 9, amount: 22},
        {store_id: 5, product_id: 10, amount: 30},
        {store_id: 1, product_id: 11, amount: 25},
        {store_id: 2, product_id: 12, amount: 16},
        {store_id: 3, product_id: 13, amount: 12},
    ],
    product_categories: [
        {product_id: 1, category_id: 2},
        {product_id: 2, category_id: 2},
        {product_id: 3, category_id: 2},
        {product_id: 4, category_id: 3},
        {product_id: 5, category_id: 3},
        {product_id: 6, category_id: 4},
        {product_id: 7, category_id: 4},
        {product_id: 8, category_id: 5},
        {product_id: 9, category_id: 6},
        {product_id: 10, category_id: 5},
        {product_id: 11, category_id: 4},
        {product_id: 12, category_id: 6},
        {product_id: 13, category_id: 4},
    ],
    order_items: [
        {id: 1, order_id: 1, product_id: 1, amount: 1, price: 1199.00},
        {id: 2, order_id: 1, product_id: 6, amount: 2, price: 129.99},
        {id: 3, order_id: 2, product_id: 2, amount: 1, price: 1299.00},
        {id: 4, order_id: 3, product_id: 4, amount: 1, price: 1499.00},
        {id: 5, order_id: 4, product_id: 5, amount: 1, price: 1799.00},
        {id: 6, order_id: 5, product_id: 3, amount: 2, price: 399.00},
        {id: 7, order_id: 5, product_id: 6, amount: 1, price: 129.99},
        {id: 8, order_id: 5, product_id: 7, amount: 1, price: 249.00},
        {id: 9, order_id: 6, product_id: 8, amount: 1, price: 349.00},
        {id: 10, order_id: 7, product_id: 4, amount: 1, price: 1499.00},
        {id: 11, order_id: 8, product_id: 8, amount: 1, price: 349.00},
        {id: 12, order_id: 9, product_id: 11, amount: 1, price: 49.99},
        {id: 13, order_id: 9, product_id: 6, amount: 1, price: 129.99},
        {id: 14, order_id: 10, product_id: 12, amount: 2, price: 179.00},
        {id: 15, order_id: 11, product_id: 13, amount: 1, price: 119.99},
        {id: 16, order_id: 11, product_id: 7, amount: 1, price: 249.00},
    ],
};

const TABLES = [
    'categories',
    'customers',
    'order_statuses',
    'product_brands',
    'product_models',
    'product_types',
    'stores',
    'orders',
    'products',
    'inventory',
    'product_categories',
    'order_items',
];

/**
 * @type {import('sequelize-cli').Migration}
 * @see https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed
 */
module.exports = {
    async up(queryInterface) {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            for (const table of TABLES) {
                await queryInterface.bulkInsert(table, seedData[table], {transaction});
            }
            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    },

    async down(queryInterface, Sequelize) {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            for (const table of TABLES.toReversed()) {
                const rows = seedData[table];
                // Good question: what is the best practise for such cases?
                const where = rows[0].id !== undefined
                    ? {id: {[Sequelize.Op.in]: rows.map(({id}) => id)}}
                    : {
                        [Sequelize.Op.or]: rows.map(({store_id, product_id, category_id}) => (
                            table === 'inventory'
                                ? {store_id, product_id}
                                : {product_id, category_id}
                        ))
                    };
                await queryInterface.bulkDelete(table, where, {transaction});
            }
            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    },
};
