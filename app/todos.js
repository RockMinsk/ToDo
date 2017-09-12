let todos = ["test", "test 3", "test 4"];

const myModule = {
	getTodos: () => todos,
	addTodo: (todo) => todos.push,
	deleteTodo: (todo) => todos.filter((el, index) => index != todos.indexOf(todo));
};

module.exports = myModule;