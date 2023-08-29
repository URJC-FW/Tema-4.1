let libros = [
    {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        año: 1967
    },
    {
        titulo: 'El señor de los anillos',
        autor: 'J. R. R. Tolkien',
        año: 1954
    },
    {
        titulo: '1984',
        autor: 'George Orwell',
        año: 1949
    },
    {
        titulo: 'Un mundo feliz',
        autor: 'Aldous Huxley',
        año: 1932
    }]

function showHideMasInfo(idLibro) {
    let masInfoElement = document.getElementById('masinfo-libro-' + idLibro);
    let display = masInfoElement.style.display;
    if (display === "none") {
        masInfoElement.style.display = "block";
    } else {
        masInfoElement.style.display = "none";
    }
}

let content = document.getElementById('content');

for (let i = 0; i < libros.length; i++) {

    let libro = libros[i];
    content.innerHTML +=
        `<div>
            <p id="libro-${i}">${libro.titulo}<button onclick="showHideMasInfo(${i})">Más info</button></p>
            <p style="display:none" id="masinfo-libro-${i}"> ${libro.autor} (${libro.año})</p>
        </div>`;
}