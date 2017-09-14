const express = require('express');
const bodyParser = require("body-parser")
const todoBase = require('./todos');

const app = express();

app.use(bodyParser.json({type: "application/json"}));
app.use(express.static('client'));

//ROUTES
app.get('/api/todos', function (req, res) {
	const todos = todoBase.getTodos();
  	res.json(todos);
});

app.post('/api/todos', function (req, res) {
	const todo = req.body;
	todo.id = todoBase.genID();

	todoBase.addTodo(todo);
  	res.json(todo);
});

app.put('/api/todos/:id', function (req, res) {
	const todoID = req.params.id;

  	const todo = todoBase.changeTodoStatus(todoID);
   	res.json(todo);
});

app.delete('/api/todos/:id', function (req, res) {
	const todoID = req.params.id;

	todoBase.deleteTodo(todoId);
  	res.json({ message: "Deleted!"});
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});