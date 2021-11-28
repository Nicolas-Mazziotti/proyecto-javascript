let pais = localStorage.getItem("Pais")
if(pais == null){
    prompt("De que pais eres")
    localStorage.setItem("Pais",pais)
}


class Producto {
    constructor(modelo, precio, stock, imagen){
        this.modelo = modelo.toUpperCase();
        this.precio = precio;
        this.stock= stock;
        this.imagen = imagen;
    }   
}


const productos = [];

productos.push(new Producto("Xiaomi RedMi Note 9T", 250, 10,"/img/xiaomi-RedMiNote9T-64GB.png"))
productos.push(new Producto("Xiaomi RedMi Note 10 Pro", 300, 10,"/img/xiaomi-RedMiNote10pro-128GB.png"))
productos.push(new Producto("Xiaomi 11 Lite", 350, 10,"/img/xiaomi-11Lite-128GB.png"))
productos.push(new Producto("Xiaomi Poco F3", 220, 10,"/img/xiaomi-pocoF3-128gb.png"))

for (const producto of productos) {
    let contenedor = document.createElement("div")
    

    contenedor.innerHTML =`
            <div class="col-md-4">
            <div class="card"style="width: 18rem;">
                <img src="${producto.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${producto.modelo}</h5>
                  <p class="card-text">Precio: ${producto.precio}</p>
                  <input placeholder="Cant." type="number" min ="0" max = "10"</input>
                  <button> Agregar 🛒</button>
                  <button>  ❌</button>                 
                </div>
              </div>
            </div>
       
    `

    document.getElementById("container").appendChild(contenedor);
    console.log(producto)
}