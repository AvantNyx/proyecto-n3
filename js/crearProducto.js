import { index } from "./index.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    evento.preventDefault();
    
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    await index.enviarProducto(nombre, precio, imagen);

    window.location.reload();
}

formulario.addEventListener("submit", crearProducto);
