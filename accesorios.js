//Cards ajax

const URL = "accesorios.json";

$.get(URL, function (respuesta,estado){
    console.log(respuesta)
    if(estado == "success"){
        let misDatos = respuesta
        for( const dato of misDatos)
            $(".cards-accesorios").append(`
            <div class="card m-2" style="width: 18rem;">
            <img src="${dato.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${dato.modelo}</p>
            </div>
            </div>
                `)
            
        }
    }
)

