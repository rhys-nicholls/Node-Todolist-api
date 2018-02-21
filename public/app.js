$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(addTodos);

    $('#todoInput').keypress(function (event) {
        if(event.which === 13){
            createTodo();
        }
    })
});

function addTodos(todos) {

    //add todos to the page
    todos.forEach(function (todo) {
        addTodo(todo);
    });
}

function addTodo(todo) {

    //Create li with class task
    var newTodo = $('<li class="task">' + todo.name + '</li>');
    if(todo.complete){
        newTodo.addClass('done');
    }

    //append to li with class list
    $('.list').append(newTodo);
}

function createTodo() {

    //send request to create new todo
    var userInput = $('#todoInput').val();
    $.post('/api/todos', {name: userInput} )
        .then(function (newTodo) {
            $('#todoInput').val('');
            addTodo(newTodo);
        })
        .catch(function (err) { 
            console.log(err);
        })
}