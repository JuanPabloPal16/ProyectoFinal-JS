function init(){
   sweetAlert();
}

function sweetAlert(){
    Swal.fire({
        title:`BIENVENIDO A LAS LOCASS.IND`,
        text:`NAVEGA POR LA PAGINA Y ELIJE LO QUE MAS TE GUSTE`,
        confirmButtontext:`CONTINUAR`,
        
    });
}


function productos (){
    //BOTON REMERA
     const boton1 = document.querySelector(".jean1")
     boton1.addEventListener("click",()=>{
     class Remera{
         constructor(prenda, talles, precio, oferta){
             this.prenda=prenda;
             this.talles=talles;
             this.precio=precio;      
             this.oferta=oferta;
             this.descuento=0;
             this.calcularDescuento= (descuento) =>{this.precio=this.precio-descuento}
         }
     }
         const jerryBlue = new Remera ("clasico jerry blue ","M,L,XL",1500,false)
         console.log(jerryBlue)
     
         //LOCAL STORAGE
         localStorage.setItem("jeanJerry", JSON.stringify(jerryBlue));
         console.log(localStorage.getItem("jeanJerry"))
     })

}