$(function()  {

	let $todos = $('#todo-list');
	let $todo = $('#new-todo ');

	let newTodoRow = (todo) => {
		let li = document.createElement("li");
		//let dataId = li.data-id;
	    li.innerHTML = '<div class="view"><input class="toggle" type="checkbox"><label>' + 
						todo.title + '</label><button class="destroy" data-id =' + todo.id + '></button></div>' + 
						'<input class="edit" value="' + todo.title + '">';
		li.setAttribute("li-id", todo.id);
		$todos.append(li);
	}

	$.ajax({
			type:'GET',
			url: '/api/todos',
			success: todos => {
				console.log('success', todos);
				$.each(todos, (i,todo) => {
						newTodoRow(todo);
					});

	            //TOOGLE
				$(".toggle").click(function(){
	    			alert("cccccc");
	    			});
				}
			});

	//ADD NEW TODO
	$('#new-todo').keydown(function (e) {
		let key = e.which;
		if(key == 13)  {
			let text = $todo.val();

			$.ajax({
				type:'POST',
				url: '/api/todos',
				data: text,
				success:  newTodo => {
					//location.reload();
					console.log(newTodo);
					newTodoRow(newTodo);
					}
				});
			}
		});  

	//EDIT
/*	$todos.delegate('li', 'dblclick', () => {

		let $li = $(this).closest('li');

	 	$.ajax({
			type:'PUT',
			url: '/api/todos/' + $(this).attr('li-id'),
			success: () => $li.setAttribute("class", "editing")	
		});
	});*/

/*	$("li").dblclick(function(){
		alert("eeeeee");
		 });*/

	//DELETE
	$todos.delegate('.destroy', 'click', () => {

		let $li = $(this).closest('li');

	 	$.ajax({
			type:'DELETE',
			url: '/api/todos/' + $(this).attr('data-id'),
			success: () => $li.fadeOut(300, () => $(this).remove())	
		});
	});

	//TOOGLE ALL
	$("#toggle-all").click(function(){
			alert("fffff");
			});

});