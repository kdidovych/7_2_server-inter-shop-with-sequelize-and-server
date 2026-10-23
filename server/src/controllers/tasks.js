const { Op } = require('sequelize');
const sqlzModels = require('../models/sqlz');
const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
const document = dom.window.document;

const MODELS = [
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
const LIMIT = 10;

/** General "Abstract" Controller to handle all similar entities CRUD requests */
class Tasks {
    /** 1. На получение всех данных из таблиц (товары, бренды и заказчики), но ограничить результат 10 строками. */
    one = async (req, res, next) => {
        try {
            const body = document.body;
            const title = document.createElement('h1');
            title.textContent = 'all entities data (upto 10 rows)';
            body.appendChild(title);
            for (const modelName of MODELS) {
                const model = sqlzModels[modelName];
                const items = await model.findAll({limit: LIMIT, raw: true});
                const table = this.createHtmlTable(items, modelName);
                body.appendChild(table);
            }

            res.type('html').send(dom.serialize());
        } catch (e) {
            next(e);
        }
    }

    /**
     * 2. Получение всех данных для id больше определенного значения
     * (значение выбрать исходя из конкретного количества записей, допустим от середины).
     * Т.е. если у вас 50 записей, то от 25 и т.д.
     */
    two = async (req, res, next) => {
        try {
            const body = document.body;
            const title = document.createElement('h1');
            title.textContent = 'all Data where id > count/2';
            body.appendChild(title);
            for (const modelName of MODELS) {
                const model = sqlzModels[modelName];
                const N = await model.count();
                const items = await model.findAll({offset: Math.floor(N / 2), raw: true});
                const table = this.createHtmlTable(items, modelName);
                body.appendChild(table);
            }

            res.type('html').send(dom.serialize());
        } catch (e) {
            next(e);
        }
    }

    /**
     * 3. Получение набора данных для нескольких значений одного атрибута (допустим 3-х разных брендов).
     * Т.е. выбрать из таблицы brands данные для Samsung, Dell и Xiomi (это пример).
     */
    three = async (req, res, next) => {
        try {
            const body = document.body;
            const title = document.createElement('h1');
            title.textContent = 'Get data for several specific attributes [Samsung, Xiaomi, ASUS]';
            body.appendChild(title);

            const model = sqlzModels.product_brands;
            const titles = ['Samsung', 'Xiaomi', 'ASUS'];
            const items = await model.findAll({where: {title: titles}, raw: true});

            const table = this.createHtmlTable(items, 'product_brands');
            body.appendChild(table);

            res.type('html').send(dom.serialize());
        } catch (e) {
            next(e);
        }
    }

    /**
     * 4. Прописать запрос на удаление данных по массиву значений атрибута (выберите сами атрибут)
     * Delete orders by codes [ORD-1002,ORD-1003]
     */
    four = async (req, res, next) => {
        try {
            const body = document.body;
            const title = document.createElement('h1');
            title.textContent = 'Delete orders by codes [ORD-1002,ORD-1003]';
            body.appendChild(title);

            const model = sqlzModels.orders;
            const code = ['ORD-1002', 'ORD-1003'];
            await model.destroy({where: {code}, raw: true});

            const result = document.createElement('h3');
            result.textContent = 'Done';
            body.appendChild(result);

            res.type('html').send(dom.serialize());
        } catch (e) {
            next(e);
        }
    }


    /**
     * 5. Прописать запрос на изменение данных (на свое усмотрение)
     * Reset/Drop/SetNull all customers password
     */
    five = async (req, res, next) => {
        try {
            const body = document.body;
            const title = document.createElement('h1');
            title.textContent = 'Reset/Drop/SetNull all customers password';
            body.appendChild(title);

            const model = sqlzModels.customers;
            const [count] = await model.update({password: null}, {
                where: {
                    password: {
                        [Op.ne]: null
                    }
                }
            });

            const result = document.createElement('h3');
            const details = document.createElement('div');
            result.textContent = 'Done';
            details.textContent = count === 0 ? 'No customers affected' : `${count} customers affected`;
            body.appendChild(result);
            body.appendChild(details);

            res.type('html').send(dom.serialize());
        } catch (e) {
            next(e);
        }
    }

    createHtmlTable(items = [], title = '') {
        const table = document.createElement('table');
        if (title) {
            const caption = document.createElement('caption');
            caption.textContent = title;
            table.appendChild(caption);
        }
        if (items.length === 0) {
            return table;
        }

        const keys = Object.keys(items[0]);
        const thead = document.createElement('thead');
        const theadTr = document.createElement('tr');
        keys.forEach(columnName => {
            const th = document.createElement('th');
            th.textContent = columnName;
            theadTr.appendChild(th);
        });
        thead.appendChild(theadTr);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        items.forEach(item => {
            const tr = document.createElement('tr');
            keys.forEach(columnName => {
                const td = document.createElement('td');
                td.textContent = item[columnName] || '';
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        return table;
    }
}

module.exports = new Tasks();
