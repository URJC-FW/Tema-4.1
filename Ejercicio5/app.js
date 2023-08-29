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

    let div = document.createElement("div");
    content.appendChild(div);

    let pTitulo = document.createElement("p");
    div.appendChild(pTitulo);

    pTitulo.textContent = libro.titulo;

    let button = document.createElement("button");
    pTitulo.appendChild(button);
    button.textContent = "Más info";
    button.onclick = () => showHideMasInfo(i);

    let pMasInfo = document.createElement("p");
    div.appendChild(pMasInfo);

    pMasInfo.style.display = 'none';
    pMasInfo.id = 'masinfo-libro-' + i;
    pMasInfo.textContent = libro.autor + ' (' + libro.año + ')';

}
