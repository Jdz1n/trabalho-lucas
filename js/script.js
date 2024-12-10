const contactForm = document.getElementById('contactForm');
const infoDisplay = document.getElementById('infoDisplay');
const displayName = document.getElementById('displayName');
const displayEmail = document.getElementById('displayEmail');
const displayMessage = document.getElementById('displayMessage');

function saveDataToLocalStorage(name, email, message) {
  localStorage.setItem('userName', name);
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userMessage', message);
}
function displaySavedData() {
  const savedName = localStorage.getItem('userName');
  const savedEmail = localStorage.getItem('userEmail');
  const savedMessage = localStorage.getItem('userMessage');

  if (savedName && savedEmail && savedMessage) {
    displayName.textContent = savedName;
    displayEmail.textContent = savedEmail;
    displayMessage.textContent = savedMessage;

    infoDisplay.style.display = 'block';
  }
}

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  saveDataToLocalStorage(name, email, message);

  displaySavedData();
});
window.onload = function() {
  displaySavedData();
};