let $todos = $('#todo-list');

$.ajax({
		type:'GET',
		url: '/api/todos',
		success: todos => {
			$.each(todos, (i,todo) => $todos.append('<li>' + todo.title + '</li>'));
		}
	});