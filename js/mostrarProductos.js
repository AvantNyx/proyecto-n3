import { index } from "./index.js";

const lista = document.querySelector("[data-lista]");
const botonBorrarTodo = document.getElementById('borrar-todo');
const mensajeVacio = document.getElementById('mensaje-vacio');


function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement("li");
    producto.className = "card__productos";

    const precioFormateado = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD',
    }).format(precio);

    producto.innerHTML = `
        <div class="card__imagen-contenedor">
            <img src="${imagen}" alt="Imagen de la card" class="card__imagen">
        </div>
        <h2 class="card__titulo">${nombre}</h2>
        <div class="card__contenido">
            <p class="card__valor">${precioFormateado}</p>
            <img src="assets/trashIcon.svg" alt="Icono" class="card__icono" data-id="${id}">
        </div>
    `;

    const iconoEliminar = producto.querySelector('.card__icono');
    iconoEliminar.addEventListener('click', async () => {
        const productoId = iconoEliminar.getAttribute('data-id');
        await index.eliminarProducto(productoId);
        producto.remove();
        verificarProductos();
    });

    return producto;
}

async function listaProductos() {
    const listaAPI = await index.listaProductos();
    listaAPI.forEach(element => lista.appendChild(crearCard(element.nombre, element.precio, element.imagen, element.id)));
    verificarProductos();
}

botonBorrarTodo.addEventListener('click', async (event) => {
    event.preventDefault();

    try {
        const listaAPI = await index.listaProductos();
        if (listaAPI.length > 0) {

            for (let producto of listaAPI) {
                await index.eliminarProducto(producto.id);
            }

            lista.innerHTML = '';
            verificarProductos();
            console.log('Todos los productos fueron eliminados');
        } else {
            console.log('No hay productos para eliminar');
        }
    } catch (error) {
        console.error('Error al borrar todos los productos:', error);
    }
});

listaProductos();

