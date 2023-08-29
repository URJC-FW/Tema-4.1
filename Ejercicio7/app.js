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
    }];

function mostrarPaginaLibro(id) {

    let content = document.getElementById('content');

    let libro = libros[id];

    content.innerHTML = `
        <h2>Libro: ${libro.titulo}</h2>

        <p>Autor: ${libro.autor}</p>
        <p>Año: ${libro.año}</p>

        <button onclick='mostrarPaginaLibros()'>Volver a la lista</button>
    `;
}

function mostrarPaginaLibros() {

    let content = document.getElementById('content');

    content.innerHTML = `<h2>Libros</h2>`;

    for (let i = 0; i < libros.length; i++) {

        content.innerHTML +=
            `<p>
            ${libros[i].titulo}
            <button onclick="mostrarPaginaLibro(${i});">Más info</button>            
        </p>`;
    }
}

mostrarPaginaLibros();
