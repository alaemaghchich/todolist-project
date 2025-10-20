const input = document.getElementById("input");
const task = document.getElementById("task");
const btn = document.querySelector(".btn");

function add(){
    let taskvalue = input.value;
    if (taskvalue === ""){
        alert(" you don't input anything");
    }
    else{
        let li = document.createElement("li");
        let span = document.createElement("span");
        
        li.innerHTML = taskvalue;
        task.appendChild(li)

        span.innerHTML = "&times;";
        li.appendChild(span);
    }
    input.value = ""; //katmsa7 ktaba li fel input fax kantkiw 3la add
    local();
}
btn.addEventListener("click", add);
task.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        local();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        local();
    }
}
)
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter"){
        add();
    }
});
function local(){
    localStorage.setItem("lists", task.innerHTML);
}
function loadtasks(){
    task.innerHTML = localStorage.getItem("lists");
}
loadtasks();