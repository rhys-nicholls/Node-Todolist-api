$(document).ready(function () {
    $.getJSON("/api/todos")
        .then(addTodos);
});

function addTodos(todos) {

    //add todos to the page
    todos.forEach(function (todo) {

        //Create li with class task
        var newTodo = $('<li class="task">' + todo.name + '</li>');
        if(todo.complete){
           newTodo.addClass('done');
        }

        //append to li with class list
        $('.list').append(newTodo);
    });
}