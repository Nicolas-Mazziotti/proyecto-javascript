const productos = [
    {id:1, modelo: "Xiaomi 11 Lite", precio: 350, img :"/img/mi-lite.png"},
    {id:2, modelo: "Xiaomi RedMi Note 10 Pro", precio: 300, img :"/img/redmi-note10.png"},
    {id:3, modelo: "Xiaomi PocoPhone F3", precio: 280, img :"/img/poco-f3.png"},
    {id:4, modelo: "Xiaomi RedMi Note 9T", precio: 350, img :"/img/redmi-note9t.png"},
];

//Guardo los productos en un array
let carrito = [];

//Sincronizo a la class del html
const contenedorTienda = document.querySelector(".contenedor-tienda");
const contenedorCarrito = document.querySelector(".contenedor-carrito");



document.addEventListener("DOMContentLoaded", () =>{
        mostrarProductos ()
})

function mostrarProductos () {
    productos.forEach ((producto) => {

        //Ahora creo las cards de productos
        // Uso el metodo scripting y no el innerhtml
        // 1 Creo un div
        const divProductos = document.createElement("div");
        // 2 agrego una clase al div
        divProductos.classList.add("card");
        divProductos.classList.add("col-md-3");
        // 3 agrego una imagen al div class"card"
        const imagen = document.createElement("img");
        imagen.src = producto.img
        imagen.classList.add ("imagen-card")
        // 4 agrego h2
        const nombreModelo = document.createElement("h2");
        nombreModelo.textContent = producto.modelo
        nombreModelo.classList.add ("nombre-modelo")
        // 5 agrego un btn

        const btnCarrito = document.createElement("button");
        btnCarrito.textContent = "Carrito"
        btnCarrito.classList.add ("btn-carrito")
        btnCarrito.onclick = () =>{
            //meto la funcion que busca el id para cuando la clickee me traiga el producto
            agregarCarrito(producto.id);
        }

        // Junto a los elementos dentro del div
        divProductos.appendChild(imagen)
        divProductos.appendChild(nombreModelo)
        divProductos.appendChild(btnCarrito)

        contenedorTienda.appendChild(divProductos)
    })
}

//creo funcion para buscar en el array el id
function agregarCarrito (id) {
    const productoAgregado = productos.find (producto => {
        return producto.id === id;
    });

    // pusheo productos al carrito
    carrito.push(productoAgregado);
    //muestro los productos en el carrito

    mostrarCarrito(carrito)

}

//creo funcion para mostrar los productos en el html
function mostrarCarrito(array){

    limpiarHtmlPrevio();

    array.forEach( producto => {
        //lo hago ahora con innerHTML
        contenedorCarrito.innerHTML += `
        <div class ="card-carrito">
            <img src ="${producto.img}" class="img-carrito"/>
            <h2 class="hola"> ${producto.modelo} </h2>
            <p> usd ${producto.precio} </p>
        </div>
        `
    })
}

function limpiarHtmlPrevio () {
    contenedorCarrito.innerHTML = "";
}


