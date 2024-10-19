const listaProductos = document.querySelector('[data-lista]');
const seccionProductos = document.getElementById('productosVisible');
const mensajeVacio = document.getElementById('mensaje-vacio');

// Función para verificar si hay productos en la lista
function verificarProductos() {
    if (listaProductos.children.length === 0) {
        mensajeVacio.style.display = 'block';
        listaProductos.style.display = 'none';
    } else {
        mensajeVacio.style.display = 'none';
        listaProductos.style.display = 'block';
    }
}

verificarProductos();