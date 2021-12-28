//Cards ajax

const URL = "accesorios.json";

$.getJSON(URL, function (respuesta,estado){
    console.log(respuesta)
    if(estado == "success"){
        let misDatos = respuesta
        for( const dato of misDatos)
            $(".cards-accesorios").prepend(`
            <div class="card m-4" style="width: 15rem;">
            <img src="${dato.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${dato.modelo}</p>
            </div>
            </div>
                `)
            
        }
    }
)

