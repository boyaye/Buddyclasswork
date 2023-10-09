  var todoInput = document.querySelector("#todo-text");
  var todoform = document.querySelector("#todo-form");
  var todoList = document.querySelector("#todo-list");
  var todocount = document.querySelector("#todo-count");

  var todos = [];

  function renderTodos(){

todoList.innerHTML = "";
todocount.textContent = todos.length

for(var i= 0;i<todos.length;i++){
    var todo = todos[i]

var li = document.createElement("li");
li.textContent = todo;
li.setAttribute("data-index",i);


var button = document.createElement("button")

button.textContent ="Complete "

li.appendChild(button);

todoList.appendChild(li);

}
}

function storetodo(){
    localStorage.setItem("storetodos",JSON.stringify(todos))
}

todoform.addEventListener("submit",function(event){
    event.preventDefault()
    var todoText = todoInput.value.trim()

    if(todoText === ""){
        return;
    }

    todos.push(todoText);

todoInput.value = "";

storetodo()
renderTodos()

})

todoList.addEventListener("click", function(event){
 
    var element = event.target

    var index = element.parentElement.getAttribute("data-index")
    if (element.matches("button") === true){

       todos.splice(index,1) 
       storetodo()
       renderTodos()
    }

})
