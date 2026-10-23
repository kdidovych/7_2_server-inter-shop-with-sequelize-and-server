# WORKFLOW
### Installation
```
mkdir server
mpn init
cd server
mkdir src
npm install dotenv express cors yup pg pg-hstore sequelize bcrypt jsdom
npm install nodemon --save-dev sequelize-auto sequelize-cli

npm install multer
```

#### Generate models
```
npx sequelize-cli init --config 'src/config/sqlz.js' --migrations-path 'src/migrations/sqlz/' --seeders-path 'src/seeders/sqlz/' --models-path 'src/models/sqlz/' --force
nano .sequelizerc
nano src/config/sqlz.js

npx sequelize-auto -h localhost -d 6_2_DB_02_Inter_shop_SELECTS -u postgres -x [PASSWORD] -p 5432  --dialect postgres -o src/models/sqlz/
```

#### Create migrations, db and tables
```
npx sequelize-cli migration:generate --name create-core-tables
npx sequelize db:create
```

### Create Seeds
```
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
npx sequelize-cli db:seed:all
```

### Add customer password field
```
npx sequelize-cli migration:generate --name add-passwd
```


```
npm install  [mocha/chai], 
```

