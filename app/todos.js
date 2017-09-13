const jsonfile = require('jsonfile');
const file = './todosArr.json';
const fs = require('fs');

/*let todos = jsonfile.readFile(file, function(err, obj) {
  	err ? console.log("File is not found") : obj.todo;
});*/

let todos = jsonfile.readFileSync(file).todo;

//let y = fs.readFile('./todosArr.json', (err, data) => err ? console.log ("BAD") : console.log(JSON.parse(data)));

//todos = require('./todosArr.json').todo;
console.log(todos);

const myModule = {
	getTodos: () => todos,
	addTodo: (todo) => todos.push,
	deleteTodo: (todo) => todos.filter((el, index) => index != todos.indexOf(todo))
};

module.exports = myModule;