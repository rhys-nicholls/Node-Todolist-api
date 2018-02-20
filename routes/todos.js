var express = require('express'),
    router = express.Router(),
    db = require('../models');


//GET - All items
router.get('/', function (req, res) {
    db.Todo.find()
        .then(function(todos){
            res.json(todos);
        })
        .catch(function (err) {
            res.send(err);
        })
});

//POST - Add new item
router.post('/', function (req, res) {
    db.Todo.create(req.body)
        .then(function(newTodo){
            //201 - Created status code
            res.status(201).json(newTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
});

//GET - Individual item
router.get('/:todoId', function (req, res) {
   db.Todo.findById(req.params.todoId)
       .then(function (foundTodo) {
           res.json(foundTodo);
       })
       .catch(function (err) {
           res.send(err);
       })
});

//UPDATE - Update item
router.put('/:todoId', function (req, res) {
   db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
       .then(function (todo) {
           res.json(todo);
       })
       .catch(function (err) {
           res.send(err);
       })
});

//DESTROY - Delete item
router.delete('/:todoId', function (req, res) {
    db.Todo.remove({_id: req.params.todoId})
        .then(function(){
            res.json({message: 'Successfully Deleted'});
        })
});

module.exports = router;