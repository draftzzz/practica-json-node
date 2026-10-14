import * as ctrl from "./src/controllers/producto.controllers.js"
import * as model from "./src/models/producto.model.js"

console.log("------ Productos al  arrancar -------");
console.log(model.listar().map((p) => p.nombre))

console.log("------- Creando uno nuevo --------");
const nombre = "sincronizada" + Date.now();
const creado = ctrl.crearProducto({nombre, precio: 32, categoria: "comida"});

// el controlador deuelve {ok: data} p {ok: error}.
// hay que revisar siempre cual de los 2 llego antes de usar el .data
if(creado.ok){
    console.log("creado:", creado.data.nombre);
} else {
    console.log("no se pudo crear:", creado.error.mensaje);
}

console.log("--------- productos ahora ---------")
console.log(model.listar().map((p) => p.nombre));

console.log(" ")
console.log("abre src/data/productos.json y compruebalo");
console.log("Vuelve a ejecutar, el producto anterior sigue ahi")
