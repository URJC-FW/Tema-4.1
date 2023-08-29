let buttons = document.getElementsByTagName('button');

function greet(event) {
  console.log('Evento:', event);
  console.log('Elemento origen: ', event.target);
  
}

buttons[0].addEventListener('click', greet);