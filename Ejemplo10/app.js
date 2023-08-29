function saluda() {

    let nombre = document.getElementById('nombre').value;

    let content = document.getElementById('content');
    content.innerHTML += '<p>Hola '+nombre+'!</p>';
}