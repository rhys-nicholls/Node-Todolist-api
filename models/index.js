var  mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo_api');

//Inform mongoose that promises will be used
mongoose.Promise = Promise;

module.exports.Todo = require('./todo');