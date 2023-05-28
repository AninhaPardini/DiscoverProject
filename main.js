let button = document.querySelector('button');
let html = document.querySelector('html')

button.addEventListener('click', function() {
    return html.classList.toggle('light');
    console.log('Mudou o tema');
});