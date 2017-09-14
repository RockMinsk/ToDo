let todos = [
	{id: 1, title: "todo 1", done: true},
	{id: 2, title: "todo 2", done: false},
	{id: 3, title: "todo 3", done: true}
];

const myModule = {
	getTodos: () => todos,

	getTodo: id => todos.find(todo => todo.id === id),

	addTodo: todo => todos.push(todo),

	changeTodosStatus: id => {
		const todo = todos.find(todo => todo.id === id);
		todo.done = !todo.done;

		return todo;
	},

	deleteTodo: id => todos = todos.filter(todo => todo.id !== id),

	genId: () => todos[todos.length].id + 1
};

module.exports = myModule;