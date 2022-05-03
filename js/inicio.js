function init(){
   sweetAlert();
   api();
}

function sweetAlert(){
    Swal.fire({
        title:`BIENVENIDO A LAS LOCASS.IND`,
        text:`NAVEGA POR LA PAGINA Y ELIGE LO QUE MAS TE GUSTE`,
        confirmButtontext:`CONTINUAR`,
        
    });
}

function api (){
    const url= "cont1-virtual1.certisend.com/web/container/api/v1"

    fetch (url)
    .then((resultado)=>resultado.json())
    .then((json)=>console.log(json.resultado))
}
