const express = require('express');
const cors = require('cors');
const entityRouter = require('./routers/api/entities');
const tasksRouter = require('./routers/tasks');
const errorHandler = require('./handlerError/request');
const multerUploader = require('./middlewares/imageUpload.mw');
const avatarController = require('./controllers/avatar');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', entityRouter);
app.use('/tasks', tasksRouter);
app.post('/avatar', multerUploader.single('avatar'), avatarController.setAvatar);
/** app.use(generalRouterLike404); */
app.use(errorHandler);

module.exports = app;