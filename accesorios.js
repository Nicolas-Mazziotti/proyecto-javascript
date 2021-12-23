//Cards ajax

const URL = "http://127.0.0.1:5500/accesorios.json";

$.get(URL, function (respuesta,estado){
    console.log(respuesta)
    if(estado == "success"){
        let misDatos = respuesta
        for (const dato of misDatos){
                $("#cards-accesorios").append(`
                <img src="${dato.img}/>
                `)
            }
        }
    }
)
