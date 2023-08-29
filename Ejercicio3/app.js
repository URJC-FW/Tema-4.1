function mostrarOcultar() {
    
    let content = document.getElementById('content');
    
    let display = content.style.display;
    if (display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}



