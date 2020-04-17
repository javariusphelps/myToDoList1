//iput/button/list
//traverse the DOM to get items above by their ID
//function(event)-getting even back for said event

var input = $("#myInput"); // getting a DOM element in jQuery
var button = $("#btn");
var list =$("#myList");

// look up how to do a click event in jQuery
// hint: $(document).click(function(event) { ... });
$(document).click(function(event){
	if(event.target.tagName.toLowerCase() === 'li') {
		var removeTodo = $(event.target);
		removeTodo.css('text-decoration', 'line-through');

		// do a set timeout for one second
		// figure out how to do a setTimeout in jquery
		setTimeout(function(){
			removeTodo.remove();
		},1000);
	}
});

$(button).click(function(event){
	if($('input').val() == ""){
		return; 
	}
	var value = ($('input').val());
	var toDo = document.createElement("li");
	toDo.append(value);
	list.append(toDo);
	$('input').val("");
	console.log(toDo);
});

