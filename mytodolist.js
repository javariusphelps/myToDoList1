//iput/button/list
//traverse the DOM to get items above by their ID
//function(event)-getting even back for said event

var input = document.getElementById("myInput");
var button = document.getElementById("btn");
var list = document.getElementById("myList");

document.addEventListener("click", function(event){
	if(event.target.tagName.toLowerCase() === 'li') {
		var removeTodo = event.target;
		list.removeChild(removeTodo);
	}
});

button.addEventListener("click", function(event){
	if(input.value == ""){
		return; 
	}
	var value = document.createTextNode(input.value);
	var toDo = document.createElement("li");
	toDo.appendChild(value);
	list.appendChild(toDo);
	input.value = "";
	console.log(toDo);
});

