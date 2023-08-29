let text = "Hola Mundo!";

let content = document.getElementById("content");

let p = document.createElement("p");
p.textContent = text;
content.appendChild(p);