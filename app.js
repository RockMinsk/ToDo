const express = require('express');
const bodyParser = require('body-parser');
const todoBase = require('./todos');

const app = express();

app.use(bodyParser.json({type: "application/json"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('client'));

//ROUTES
// 1. Upload existing Todos
app.get('/api/todos', function (req, res) {
	const todos = todoBase.getTodos();
  	res.json(todos);
});
// 2. Upload concrete Todo
app.get('/api/todos/:id', function (req, res) {
	const todo = todoBase.getTodo(todo => todo.id = Number(req.params.id));
  	res.json(todo);
});

// 3. Add new Todo
app.post('/api/todos', function (req, res) {
	const todo = {
		id: todoBase.genId(),
		title: Object.keys(req.body).join(), 
		done: true
	};
	todoBase.addTodo(todo);
  	res.json(todo);
});
// 4. Change Todo's status
app.put('/api/todos/:id', function (req, res) {
	const todoId = Number(req.params.id);
  	const todo = todoBase.changeTodoStatus(todoId);
   	res.json(todo);
});
// 5. Change Todo's content
/*app.put('/api/todos/:id', function (req, res) {
	const todoId = Number(req.params.id);

  	const todo = todoBase.changeTodoContent(todoId);
   	res.json(todo);
});*/
// 6. Delete Todo
app.delete('/api/todos/:id', function (req, res) {
	let todoId = Number(req.params.id);
	//console.log(Number(req.params.id));

	todoBase.deleteTodo(todoId);
  	res.json(Number(req.params.id));
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});