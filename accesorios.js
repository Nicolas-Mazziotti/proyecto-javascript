
const URL = "http://127.0.0.1:5500/accesorios.json";

$.get(URL, function (respuesta,estado){
    if(estado == "success"){
        let misDatos = respuesta
        for (const datos of misDatos){
            $("#carousel-accesorios").append(`
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="${datos.img}" class="d-block w-25 " alt="...">
                </div>
     
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            `)
        }
    }
})
