const checkboxes = document.querySelectorAll('.list input[type="checkbox"]');
let counter = document.getElementById("counter");
function alae(){
  let completed = document.querySelectorAll('.list input[type="checkbox"]:checked').length;
  const total = checkboxes.length;
  counter.textContent = completed + " / " + total + " completed tasks";}
for (let box of checkboxes){
  box.onchange = alae;}
