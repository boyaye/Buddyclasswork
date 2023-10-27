var Studentinfo = document.getElementById("studentname");
var grades = document.querySelector("#grade");
var comment = document.querySelector("#textel2")
var savebtn = document.getElementById("save")
var messageEl = document.getElementById("message")




savebtn.addEventListener("click",function(event){
    event.preventDefault()
    
var studentgrades = {
    Studentinfo: Studentinfo.value,
    grades:grades.value,
    comment:comment.value.trim()

};

    localStorage.setItem("grader", JSON.stringify(studentgrades))
    
    rendermessage();
})

function rendermessage(){
    var gradeinfo = JSON.parse(localStorage.getItem("grader"))
if(gradeinfo !== null){
    messageEl.textContent= gradeinfo.Studentinfo +" "+ gradeinfo.grades
}
}
