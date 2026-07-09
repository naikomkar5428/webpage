const button = document.getElementById('action-btn');
const title = document.getElementById('title');

button.addEventListener('click', () => {
    title.textContent = "You clicked the button! ";
    title.style.color = "#28a745";
    button.textContent = "Done!";
});
