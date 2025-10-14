const checkboxes = document.querySelectorAll('.list input[type="checkbox"]');
const counter = document.getElementById('counter');

function alae() {
  const completed = document.querySelectorAll('.list input[type="checkbox"]:checked').length;
  const total = checkboxes.length;
  counter.textContent = completed + " / " + total + " completed tasks";
}
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change',alae );
});
