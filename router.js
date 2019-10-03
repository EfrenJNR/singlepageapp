const express = require('express')
const router = express.Router()
const db = require('./models/dbLink')
const controllers = require('./controllers/todoController')

router.route('/')
    .get(controllers.getTodoList)
    .post(controllers.createNewItem)

router.route('/:todoId')
    .get(controllers.retrieveItem)
    .put(controllers.updateItem)
    .delete(controllers.deleteItem)

module.exports = router