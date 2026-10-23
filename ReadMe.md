<a href="https://freshcode-training.kwiga.com/courses/javascript-developer-ru/prakticheskoe-zadanie-31">Link to kwiga</a>

# FOR MENTOR
1. Add configs
```
cp .env.ecxample .env
nano .env
```
2. manage db
```
npm run db-create
npm run db-migrate
npm run db-seeds
```
3. Run tests from folder "server/test/http-requests"

# REQUIREMENTS

<h1>📘 Практическое задание. 44. Server 04. Inter-shop with Sequelize and server</h1>
<section>
    <h2>Server. Inter-shop with Sequelize and server</h2>
    <p></p>
    <p>Необходимо создать базу данных интернет-магазина используя библиотеку Sequelize.<br><br>Бизнес сущности такие же,
        как в задании по БД (Internet Shop).<br>Таблицы засеять тестовыми данными используя Seeders.<br>Создать сервер
        на Express. Добавить controllers для каждой сущности.<br>Добавить routers для каждой сущности. Добавить
        middlewares:<br>- validate,<br>- errorHandlers<br>&nbsp; &nbsp;&nbsp;<br>Добавить тесты с использованием Rest
        Client. Создать для тестов отдельный каталог.&nbsp;</p>
    <p>Каждую сущность тестировать в отдельном http-файле.<br>&nbsp; &nbsp;&nbsp;<br>Добавить столбец password для
        таблицы customers и добавить шифрование данных в этом столбце.<br>Также добавить валидацию поля email для
        таблицы customers.<br>&nbsp; &nbsp;&nbsp;<br>Прописать в controllers простые запросы (без JOIN):<br>&nbsp;
        &nbsp;&nbsp;<br>1. На получение всех данных из таблиц (товары, бренды и заказчики), но ограничить результат 10
        строками.<br>&nbsp; &nbsp;&nbsp;<br>2. Получение всех данных для id больше определенного значения (значение
        выбрать исходя из конкретного количества записей, допустим от середины).&nbsp;</p>
    <p>&nbsp; &nbsp; Т.е. если у вас 50 записей, то от 25 и т.д.<br>&nbsp; &nbsp;&nbsp;<br>3. Получение набора данных
        для нескольких значений одного атрибута (допустим 3-х разных брендов).&nbsp;</p>
    <p>&nbsp; &nbsp; Т.е. выбрать из таблицы brands данные для Samsung, Dell и Xiomi (это пример).<br>&nbsp; &nbsp;&nbsp;<br>4.
        Прописать запрос на удаление данных по массиву значений атрибута (выберите сами атрибут)<br>&nbsp;
        &nbsp;&nbsp;<br>5. Прописать запрос на изменение данных (на свое усмотрение)<br>&nbsp; &nbsp;&nbsp;<br>6.
        Прописать все связи между таблицами в моделях и миграциях, используя методы:<br>&nbsp; &nbsp; &nbsp; &nbsp;-
        belongsTo,<br>&nbsp; &nbsp; &nbsp; &nbsp;- belongsToMany,<br>&nbsp; &nbsp; &nbsp; &nbsp;- hasOne,<br>&nbsp;
        &nbsp; &nbsp; &nbsp;- hasMany это для моделей<br>&nbsp; &nbsp; &nbsp; &nbsp;и свойства references - для
        миграций.<br><br>Создавать модели и миграции для соединительных таблиц не нужно.<br><br>Задание сдавать в виде
        ссылки на GitHub. Не забудьте приложить файл .env в ТГ</p>
    <p>&nbsp;</p>
</section>

<h1>📘 Практическое задание. 45. Server 05. Add images</h1>
<section>
<h2>Server. Add images</h2><p></p><p><span>Необходимо, в дополнение к заданию по интернет магазину добавить в таблицу brands столбец logo и заполнить его логотипами брендов, используя библиотеку multer.</span>
<span><br><br></span><span>Количество добавленных изображений на свое усмотрение, но не меньше 5.</span></p>
</section>