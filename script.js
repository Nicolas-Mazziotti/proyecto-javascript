
class Producto {
    constructor(modelo, precio, stock, imagen){
        this.modelo = modelo.toUpperCase();
        this.precio = precio;
        this.stock= stock;
        this.imagen = imagen;
    }
}

const productos = [];

productos.push(new Producto("Xiaomi RedMi Note 9T", 250, 10,""/*aca iria la imagen*/))
productos.push(new Producto("Xiaomi RedMi Note 10 Pro", 300, 10,""))
productos.push(new Producto("Xiaomi 11 Lite", 350, 10,""))
productos.push(new Producto("Xiaomi Poco F3", 350, 10,""))

for (const producto of productos) {
    let contenedor = document.createElement("div")
    contenedor.classList.add("xiaomi");
    contenedor.innerHTML = `
    <img class ="imagen" src="${producto.imagen}</img>
    <h2 class ="modelo"> Modelo: ${producto.modelo}</h2>
    <h4 class="precio"> Precio: ${producto.precio} </h4>
    <input placeholder="Cant." type="number" min ="0" max = "10"</input>
    <button class="boton" type="submit" id="myBtn">Add 🛒 </button>
    <hr>
    `

    document.getElementById("xiaomi").appendChild(contenedor);
}