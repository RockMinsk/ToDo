let todos = [
	{id: 1, title: "Buy Milk", done: true},
	{id: 2, title: "Go to the cinema", done: false},
	{id: 3, title: "Learn Javascript", done: true}
];

const myModule = {
	getTodos: () => todos,

	getTodo: id => todos.find(todo => todo.id === id),

	addTodo: todo => todos.push(todo),

	changeTodoStatus: id => {
		const todo = todos.find(todo => todo.id === id);
		//console.log(id);
		todo.done = !todo.done;

		return todo;
	},

	changeTodosContent: title => {
		const todo = todos.find(todo => todo.id === id);
		todo.title = title;

		return todo;
	},

	deleteTodo: id => todos = todos.filter(todo => todo.id !== id),

	genId: () => todos[todos.length-1].id + 1
};

module.exports = myModule;