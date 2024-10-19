async function listaProductos(){
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();

    return conexionConvertida
}

async function enviarProducto(nombre,precio,imagen){
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:`${precio}`,
            imagen:imagen
        })

    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;

}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
    });

    if (!conexion.ok) {
        throw new Error("No se pudo eliminar el producto");
    }
}

export const index={
    listaProductos,enviarProducto,eliminarProducto,
}

