import * as model from "../models/producto.model.js"
export function listarProductos(){
    return {ok: true, data: model.listarDisponibles()};
}
export function verProducto(id){
    const producto = model.obtenerPorId(Id);
    if(!producto){
        return {ok: false, error: {mensaje: "producto no encontrado", detalles: []}}
    }
    return {ok: true, data: producto};
}

export function crearProducto(datos){
    if(model.existeNombre(datos.nombre)){
        return {ok: false, error: {mensaje: "Ya existe un producto con esenombree", detalles: []}}
    }
    return {ok: true, data: model.crear(datos)};
}