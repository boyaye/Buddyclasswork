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
 
    messageEl.textContent = "your detials is save "+" "+studentgrades.Studentinfo

})
