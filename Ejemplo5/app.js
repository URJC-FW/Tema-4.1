function saluda() {
    let content = document.getElementById('content');
    content.innerHTML = '<p>Hola Mundo!</p>';
}

let buttons = document.getElementsByTagName('button');

buttons[0].addEventListener('click', saluda);