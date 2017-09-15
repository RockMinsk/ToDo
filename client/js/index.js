let $todos = $('#todo-list');

$.ajax({
		type:'GET',
		url: '/api/todos',
		success: todos => {
			$.each(todos, (i,todo) => {
				let li = document.createElement("li");
    			li.innerHTML = '<div class="view"><input class="toggle" type="checkbox"><label>' + 
					todo.title + '</label><button class="destroy"></button></div>' + 
					'<input class="edit" value="' + todo.title + '">';
				$todos.append(li);
				});
			}
		});

$('#new-todo').keydown(function (e) {
 				let key = e.which;
 				if(key == 13)  {
   					alert("uhuhuhuh");
   				}
   			});

            //TOOGLE
$(".toggle").click(function(){
    			alert("cccccc");
    			});

            //DELETE
$(".destroy").click(function(){
    			alert("bbbbbb");
    			});