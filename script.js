const productos = [
    {id:1, modelo: "Xiaomi 11 Lite", precio: 350, img :"./img/mi-lite.png"},
    {id:2, modelo: "Xiaomi RedMi Note 10 Pro", precio: 300, img :"./img/redmi-note10.png"},
    {id:3, modelo: "Xiaomi PocoPhone F3", precio: 280, img :"./img/poco-f3.png"},
    {id:4, modelo: "Xiaomi RedMi Note 9T", precio: 350, img :"./img/redmi-note9t.png"},
    {id:5, modelo: "Xiaomi RedMi Note 10S Dual", precio: 220, img :"./img/redmi-note10s.png"},
    {id:6, modelo: "Xiaomi Black Shark 3 Dual", precio: 350, img :"./img/shark.png"},
];

//Guardo los productos en un array
let carrito = [];

//Sincronizo a la class del html
const contenedorTienda = document.querySelector(".contenedor-tienda");
//saco porque use jQuery en #contenedor-carrito
// const contenedorCarrito = document.querySelector("#contenedor-carrito");
const carritoHtml = document.querySelector(".carrito");
const totalProductos = document.getElementById('totalProductos')
const botonFinalizar  = document.getElementById("finalizar")



// document.addEventListener("DOMContentLoaded", () =>{
//         mostrarProductos ()
// })

//uso jquery para preparar el DOM
$(document).ready(function(){
    mostrarProductos()
})

function mostrarProductos () {
    productos.forEach ((producto) => {

        //Ahora creo las cards de productos
        // Uso el metodo scripting y no el innerhtml
        // 1 Creo un div

        const divProductos = document.createElement("div")
        // 2 agrego una clase al div
        divProductos.classList.add("card");
        divProductos.classList.add("mb-4")
        divProductos.classList.add("col-md-3");
        // 3 agrego una imagen al div class"card"
        const imagen = document.createElement("img");
        imagen.src = producto.img
        imagen.classList.add ("imagen-card")
        imagen.classList.add ("card-img-top")
        // 4 agrego h2
        const nombreModelo = document.createElement("h2");
        nombreModelo.textContent = producto.modelo
        nombreModelo.classList.add ("nombre-modelo")
        const precioProducto = document.createElement("p")
        precioProducto.textContent =  ("usd ") + producto.precio

        
        // 5 agrego un btn

        const btnCarrito = document.createElement("button");
        btnCarrito.textContent = "Agregar al Carrito 🛒"
        btnCarrito.classList.add ("btn-carrito")
        btnCarrito.onclick = () =>{
            //meto la funcion que busca el id para cuando la clickee me traiga el producto
            agregarCarrito(producto.id);
            
        }

        // Junto a los elementos dentro del div
        divProductos.appendChild(imagen)
        divProductos.appendChild(nombreModelo)
        divProductos.appendChild(precioProducto)
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
    //actualizar cantidad productos
    cantidadProductos = carrito.length
    $(".cantidad-productos").html(cantidadProductos)
    //muestro los productos en el carrito
    actualizarCarrito()
    mostrarCarrito(carrito)

    //guardo en el storage
    const carritoString = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoString)
}



//creo funcion para mostrar los productos en el html
function mostrarCarrito(array){

    $("#contenedor-carrito").html("")
    array.forEach( producto => {
        //uso jQuery
        $("#contenedor-carrito").append(`
            <div class="card-carrito container">
            <img src ="${producto.img}" class="img-carrito"/>
                    <h2 class="hola"> ${producto.modelo} </h2>
                    <p> usd ${producto.precio} </p>
                    <button class="btn btn-dark" id=${producto.id}>Eliminar</button>

        `)
        // Creo boton eliminar
       let btnEliminar = document.getElementById(`${producto.id}`)

            btnEliminar.addEventListener('click', ()=>{
            console.log(producto.id)
            btnEliminar.parentElement.remove()
            carrito = carrito.filter(el => el.id != producto.id)
            //resta el numero length cada vez que elimina
            cantidadProductos = carrito
            $(".cantidad-productos").html(cantidadProductos)
            console.log(carrito)
            actualizarCarrito()
            const carritoString = JSON.stringify(carrito)
            localStorage.setItem("carrito", carritoString)
        })
    })
    
}

function actualizarCarrito(){
    totalProductos.innerText = carrito.reduce((acc, el)=> acc + el.precio, 0)

}

let cantidadProductos = 0

function recuperar(){
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
 

    if(recuperarLS){
        //sumar cada producto length agregado al carrito
        cantidadProductos = recuperarLS.length
        $(".cantidad-productos").html(cantidadProductos)
        console.log (cantidadProductos)
        recuperarLS.forEach(el => carrito.push(el))
        mostrarCarrito(recuperarLS)
        actualizarCarrito()
    }
}

recuperar()


//Creo el boton para finalizar la compra
botonFinalizar.innerHTML =`<button id="terminar" class="btn btn-primary">Terminar</button>`
let botonCheckout= document.getElementById("finalizar")

botonCheckout.addEventListener('click', ()=>{

})

