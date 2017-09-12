const express = require('express');
const todos = require('./todos.js');

const app = express();

app.use(express.static('../', false));

app.get('/api/todos', function (req, res) {
  res.json(todos.getTodos());
});

app.post('/api/todos', function (req, res) {
  res.json(todos.addTodos());
});

app.delete('/api/todos/id', function (req, res) {
  res.json(todos.deleteTodo());
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});