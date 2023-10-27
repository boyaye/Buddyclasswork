var todoForm = document.querySelector("#todo-form");
var todoinput = document.querySelector("#todo-text");
var todocount = document.querySelector("#todo-count");
var todolist = document.querySelector("#todo-list")



var todo = []




function rendertodo(){
    todolist.innerHTML = "";
    todocount.textContent = todo.length;
    for(var i = 0; i < todo.length;i++){
        var todolistEl = todo[i]
        var li = document.createElement("li")
        li.textContent = todolistEl
        li.setAttribute("data-index", i)
        var button = document.createElement("button")
        button.textContent = "Completed";
        li.appendChild(button)
        todolist.appendChild(li)
    }
}

function storetodo(){
    localStorage.setItem("todolist", JSON.stringify(todo))
}

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    var todoinpEL = todoinput.value.trim();
    if(todoinpEL === ""){
        return
    }
    todo.push(todoinpEL)
    todoinput.value = "";
    rendertodo()
    storetodo()

})

todolist.addEventListener("click", function(event){
    event.preventDefault()
    var element = event.target
    if(element.matches("button") === true){
        var index = element.parentElement.getAttribute("data-index")
        todo.splice(index, 1)
    }
    rendertodo()
    storetodo()

})

function init(){
    if(todoinput === ""){
        return
    }
    rendertodo()
    storetodo()
}
init()









































/*

var todos = [];

function renderstart(){

  todolist.innerHTML = "";
    todocount.textContent = todos.length;

    for(var i = 0; i < todos.length; i++){
        var todo = todos[i]

var li = document.createElement("li");
li.textContent = todo
li.setAttribute("data-index",i)

var button = document.createElement("button");

button.textContent = "Recycle"

li.appendChild(button)
todolist.appendChild(li)
    }
}

function storestartcode(){
    localStorage.setItem("todos",JSON.stringify(todos))
}


todoForm.addEventListener("submit",function(event){

    event.preventDefault();

    var todotext = todoinput.value.trim()

    if(todotext === ""){
        return;
    }
todos.push(todotext)
todoinput.value = "";

storestartcode()
renderstart()

})


todolist.addEventListener("click",function(event){
    var element = event.target
    
    if(element.matches("button") === true){
        var index = element.parentElement.getAttribute("data-index")
todos.splice(index,1)


    }
    storestartcode()
renderstart()
})

function init(){

    var todoprocess = JSON.parse(localStorage.getItem("todos"))

    if(todoprocess !== null){
        todos = todoprocess
    }
    renderstart()

}

init()









































/*
var todos = [];

function rendertodo(){

    todolist.innerHTML = "";
    todocount.textContent = todos.length

    for(var i = 0;i <todos.length;i++){
        var todo = todos[i]

   var li = document.createElement("li");
   li.textContent = todo
   li.setAttribute("data-index", i)

var button = document.createElement("button");
button.textContent = "Delete";

li.appendChild(button);

todolist.appendChild(li);

    }
}
function storetodo(){
    localStorage.setItem("storetodo",JSON.stringify(todos))
}

todoForm.addEventListener("submit",function(event){
    event.preventDefault()
    var inputtext = todoinput.value.trim()

    if(inputtext === ""){
        return;
    }
  
todos.push(inputtext)
todoinput.value = "";
storetodo()
rendertodo()

})

todolist.addEventListener("click",function(event){

    var element = event.target;
    var index = element.parentElement.getAttribute("data-index")
    if(element.matches("button") === true){

todos.splice(index, 1)

    }

    storetodo()
    rendertodo()

})




/*
var todos = [];

function rendertodo(){
 todolist.innerHTML = "";
 todocount.textContent= todos.length

for(var i=0;i<todos.length;i++){
    var todo = todos[i]

    var li = document.createElement("li")
    li.textContent = todo
    li.setAttribute("data-index", i)

    var button = document.createElement("button")
    button.textContent = "Delete";
    li.appendChild(button);
    todolist.appendChild(li)
}
}

function storetodo(){
    localStorage.setItem("storetodo",JSON.stringify(todos))
}

todoForm.addEventListener("submit", function(event){

    event.preventDefault()

    var todosEl = todoinput.value.trim()

    if(todosEl === ""){
        return
    }

    todos.push(todosEl)

    todoinput.value = "";

    storetodo()
    rendertodo()

})*/