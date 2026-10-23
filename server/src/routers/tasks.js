const express = require('express');
const router = express.Router({ caseSensitive: true, strict: true });
const tasksController = require('../controllers/tasks');

router
    .get(`/1`, tasksController.one)
    .get(`/2`, tasksController.two)
    .get(`/3`, tasksController.three)
    .get(`/4`, tasksController.four)
    .get(`/5`, tasksController.five)

module.exports = router;
