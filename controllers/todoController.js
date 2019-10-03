const db = require('../models/dbLink')

exports.getTodoList = function (req, res) {
    db.Todo.find()
        .then(function (todos) {
            res.json(todos)
        })
        .catch(function (err) {
        res.send(err)
    })
}

exports.createNewItem = function (req, res) {
    db.Todo.create(req.body)
        .then(function (newTodo) {
            res.status(201).json(newTodo)
        })
        .catch(function (err) {
        res.send(err)
    })
}

exports.retrieveItem = function (req, res) {
    db.Todo.findById(req.params.todoId)
        .then(function (foundTodo) {
            res.json(foundTodo)
        })
        .catch(function (err) {
        res.send(err)
    })
}

exports.updateItem = function (req, res) {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
        .then(function (todo) {
            res.json(todo)
        })
        .catch(function (err) {
        res.send(err)
    })
}

exports.deleteItem = function (req, res) {
    db.Todo.remove({_id: req.params.todoId})
        .then(function () {
            res.json({message: "List item deleted"})
        })
        .catch(function (err) {
        res.send(err)
    })
}

module.exports = exports