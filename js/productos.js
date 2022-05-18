function init(){
agregarCarrito();
agregarCarrito2();
agregarCarrito3();
agregarCarrito4();
agregarCarrito5();
agregarCarrito6();
agregarCarrito7();
agregarCarrito8();
agregarCarrito9();
agregarCarrito10();
productos();
api();
}

//MENSAJE DE QUE AGREGASTE PRODUCTOS AL CARRITO (TOASTIFY)
function agregarCarrito(){

    const jean1 = document.querySelector(".agregadoCarrito");
    jean1.addEventListener("click", ()=>{
       Toastify({
       text: "ESTE PRODUCTO SE AGREGO AL CARRITO 🛍️",
       duration: 3000,
       style:{
        color: "black",
        background: "#f1cad4",
        borderRadius: "20px",
       }
    }).showToast()});
    
}

function agregarCarrito2(){
    const jean2 = document.querySelector(".agregadoCarrito2");
    jean2.addEventListener("click", ()=>{
        Toastify({
            text: "ESTE PRODUCTO SE AGREGO AL CARRITO 🛍️",
            duration: 3000,
            style:{
             color: "black",
             background: "#f1cad4",
             borderRadius: "20px",
            }
         }).showToast()});

}

function agregarCarrito3(){
    const jean3 = document.querySelector(".agregadoCarrito3");
    jean3.addEventListener("click", ()=>{
        Toastify({
            text: "ESTE PRODUCTO SE AGREGO AL CARRITO 🛍️",
            duration: 3000,
            style:{
             color: "black",
             background: "#f1cad4",
             borderRadius: "20px",
            }
         }).showToast()});

}

function agregarCarrito4(){
    const jean4 = document.querySelector(".agregadoCarrito4");
    jean4.addEventListener("click", ()=>{
        Toastify({
            text: "ESTE PRODUCTO SE AGREGO AL CARRITO 🛍️",
            duration: 3000,
            style:{
             color: "black",
             background: "#f1cad4",
             borderRadius: "20px",
            }
         }).showToast()});

}

function agregarCarrito5(){
    const jean5 = document.querySelector(".agregadoCarrito5");
    jean5.addEventListener("click", ()=>{
        Toastify({
            text: "ESTE PRODUCTO SE AGREGO AL CARRITO 🛍️",
            duration: 3000,
            style:{
             color: "black",
             background: "#f1cad4",
             borderRadius: "20px",
            }
         }).showToast()});

}

function agregarCarrito6(){
    const jean6 = document.querySelector(".agregadoCarrito6");
    jean6.addEventListener("click", ()=>{
        Toastify({
            text: "ESTE PRODUCTO SE AGREGO AL CARRITO 🛍️",
            duration: 3000,
            style:{
             color: "black",
             background: "#f1cad4",
             borderRadius: "20px",
            }
         }).showToast()});

}

function agregarCarrito7(){
    const jean7 = document.querySelector(".agregadoCarrito7");
    jean7.addEventListener("click", ()=>{
        Toastify({
            text: "ESTE PRODUCTO SE AGREGO AL CARRITO 🛍️",
            duration: 3000,
            style:{
             color: "black",
             background: "#f1cad4",
             borderRadius: "20px",
            }
         }).showToast()});

}

function agregarCarrito8(){
    const jean8 = document.querySelector(".agregadoCarrito8");
    jean8.addEventListener("click", ()=>{
        Toastify({
            text: "ESTE PRODUCTO SE AGREGO AL CARRITO 🛍️",
            duration: 3000,
            style:{
             color: "black",
             background: "#f1cad4",
             borderRadius: "20px",
            }
         }).showToast()});

}

function agregarCarrito9(){
    const jean9 = document.querySelector(".agregadoCarrito9");
    jean9.addEventListener("click", ()=>{
        Toastify({
            text: "ESTE PRODUCTO SE AGREGO AL CARRITO 🛍️",
            duration: 3000,
            style:{
             color: "black",
             background: "#f1cad4",
             borderRadius: "20px",
            }
         }).showToast()});

}

function agregarCarrito10(){
    const jean10 = document.querySelector(".agregadoCarrito10");
    jean10.addEventListener("click", ()=>{
        Toastify({
            text: "ESTE PRODUCTO SE AGREGO AL CARRITO 🛍️",
            duration: 3000,
            style:{
             color: "black",
             background: "#f1cad4",
             borderRadius: "20px",
            }
         }).showToast()});

}



//CARRITO: PRODUCTOS QUE SE AGREGAN AL CARRITO Y AL LOCAL STORAGE
function productos (){
     //JEAN JERRY
    const jeanJerry1 = document.querySelector(".jeanJerry")
     jeanJerry1.addEventListener("click",()=>{
     class jeanJerryBlue{
         constructor(prenda, talles, precio, oferta){
             this.prenda=prenda;
             this.talles=talles;
             this.precio=precio;      
             this.oferta=oferta;
             this.descuento=0;
             this.calcularDescuento= (descuento) =>{this.precio=this.precio-descuento}
         }
     }
         const jerryBlue = new jeanJerryBlue ("clasico jerry blue ","40,38,46",1500,false)
         console.log(jerryBlue)
     
         //LOCAL STORAGE
         localStorage.setItem("jeanJerry", JSON.stringify(jerryBlue));
         console.log(localStorage.getItem("jeanJerry"))
     })

     
     //JEAN JERRY
     const jeanJerry2 = document.querySelector(".jeanJerry2")
     jeanJerry2.addEventListener("click",()=>{
     class jeanJerryBlue{
         constructor(prenda, talles, precio, oferta){
             this.prenda=prenda;
             this.talles=talles;
             this.precio=precio;      
             this.oferta=oferta;
             this.descuento=0;
             this.calcularDescuento= (descuento) =>{this.precio=this.precio-descuento}
         }
     }
         const jerryBlue = new jeanJerryBlue ("clasico jerry blue ","40,38,46",1500,false)
         console.log(jerryBlue)
     
         //LOCAL STORAGE
         localStorage.setItem("jeanJerry", JSON.stringify(jerryBlue));
         console.log(localStorage.getItem("jeanJerry"))
     })


     //JEAN CLASICO ANNIE
     //BOTON REMERA CON ESTAMPADO
    const JeanAnnie = document.querySelector(".jeanAnnie")
    JeanAnnie.addEventListener("click",()=>{
        class jeanAnnieClassic{
            constructor(prenda, talles, precio, oferta){
                this.prenda=prenda;
                this.talles=talles;
                this.precio=precio;      
                this.oferta=oferta;
                this.descuento=0;
                this.calcularDescuento= (descuento) =>{this.precio=this.precio-descuento}
            }
        }
        const JeanAnnie = new jeanAnnieClassic ("JEAN ANNIE CLASSIC","36,40,44", 2500, false)
        console.log(JeanAnnie)

        //LOCAL STORAGE
        localStorage.setItem("JeanANNie", JSON.stringify(JeanAnnie));
        console.log(localStorage.getItem("JeanANNie"))
    })


    //JEAN ITALIA
    const JeanItalia = document.querySelector(".jeanItalia")
    JeanItalia.addEventListener("click",()=>{
        class jeanItaliaNissie{
            constructor(prenda, talles, precio, oferta){
                this.prenda=prenda;
                this.talles=talles;
                this.precio=precio;      
                this.oferta=oferta;
                this.descuento=0;
                this.calcularDescuento= (descuento) =>{this.precio=this.precio-descuento}
            }
        }
        const JeanAnnie = new jeanItaliaNissie ("JEAN JEAN ITALIA NISSIE","40,42,44,46", 2500, false)
        console.log(JeanAnnie)

        //LOCAL STORAGE
        localStorage.setItem("JeanItalia", JSON.stringify(JeanAnnie));
        console.log(localStorage.getItem("JeanItalia"))
    })


    //POLLERA MINI BLACK
    const polleraBlack = document.querySelector(".JeanMiniBlack")
    polleraBlack.addEventListener("click",()=>{
        class PolleraMiniBLAck{
            constructor(prenda, talles, precio, oferta){
                this.prenda=prenda;
                this.talles=talles;
                this.precio=precio;      
                this.oferta=oferta;
                this.descuento=0;
                this.calcularDescuento= (descuento) =>{this.precio=this.precio-descuento}
            }
        }
        const polleraMiniBlack = new PolleraMiniBLAck ("POLLERA MINI BLACK","36,40,42,44", 2100, true)
        console.log(polleraMiniBlack)
        polleraMiniBlack.calcularDescuento(200)

        //LOCAL STORAGE
        localStorage.setItem("pollerablack", JSON.stringify(polleraMiniBlack));
        console.log(localStorage.getItem("pollerablack"))
    })


    
    const polleraBlack2 = document.querySelector(".JeanMiniBlack2")
    polleraBlack2.addEventListener("click",()=>{
        class PolleraMiniBLAck{
            constructor(prenda, talles, precio, oferta){
                this.prenda=prenda;
                this.talles=talles;
                this.precio=precio;      
                this.oferta=oferta;
                this.descuento=0;
                this.calcularDescuento= (descuento) =>{this.precio=this.precio-descuento}
            }
        }
        const polleraMiniBlack = new PolleraMiniBLAck ("POLLERA MINI BLACK","36,40,42,44", 2100, true)
        console.log(polleraMiniBlack)
        polleraMiniBlack.calcularDescuento(200)

        //LOCAL STORAGE
        localStorage.setItem("pollerablack", JSON.stringify(polleraMiniBlack));
        console.log(localStorage.getItem("pollerablack"))
    })


    
    const polleraBlack3 = document.querySelector(".JeanMiniBlack3")
    polleraBlack3.addEventListener("click",()=>{
        class PolleraMiniBLAck{
            constructor(prenda, talles, precio, oferta){
                this.prenda=prenda;
                this.talles=talles;
                this.precio=precio;      
                this.oferta=oferta;
                this.descuento=0;
                this.calcularDescuento= (descuento) =>{this.precio=this.precio-descuento}
            }
        }
        const polleraMiniBlack = new PolleraMiniBLAck ("POLLERA MINI BLACK","36,40,42,44", 2100, true)
        console.log(polleraMiniBlack)
        polleraMiniBlack.calcularDescuento(200)

        //LOCAL STORAGE
        localStorage.setItem("pollerablack", JSON.stringify(polleraMiniBlack));
        console.log(localStorage.getItem("pollerablack"))
    })


    //SHORT SUMMER NISSIE
    const shortSummer = document.querySelector(".JeanSummer")
    shortSummer.addEventListener("click",()=>{
        class ShortSummer{
            constructor(prenda, talles, precio, oferta){
                this.prenda=prenda;
                this.talles=talles;
                this.precio=precio;      
                this.oferta=oferta;
                this.descuento=0;
                this.calcularDescuento= (descuento) =>{this.precio=this.precio-descuento}
            }
        }
        const ShortSUMMER = new ShortSummer ("SHORT SUMMER NISSIE","38,44,50", 3200, false)
        console.log(ShortSUMMER)

        //LOCAL STORAGE
        localStorage.setItem("shortSummer", JSON.stringify(ShortSUMMER));
        console.log(localStorage.getItem("shortSummer"))
    })



    const shortSummer2 = document.querySelector(".JeanSummer2")
    shortSummer2.addEventListener("click",()=>{
        class ShortSummer2{
            constructor(prenda, talles, precio, oferta){
                this.prenda=prenda;
                this.talles=talles;
                this.precio=precio;      
                this.oferta=oferta;
                this.descuento=0;
                this.calcularDescuento= (descuento) =>{this.precio=this.precio-descuento}
            }
        }
        const ShortSUMMER = new ShortSummer2 ("SHORT SUMMER NISSIE","38,44,50", 3200, false)
        console.log(ShortSUMMER)

        //LOCAL STORAGE
        localStorage.setItem("shortSummer", JSON.stringify(ShortSUMMER));
        console.log(localStorage.getItem("shortSummer"))
    })


    //SHORT TOMMY
    const shortTOMMY = document.querySelector(".jeanTommy")
    shortTOMMY.addEventListener("click",()=>{
        class ShortTommy{
            constructor(prenda, talles, precio, oferta){
                this.prenda=prenda;
                this.talles=talles;
                this.precio=precio;      
                this.oferta=oferta;
                this.descuento=0;
                this.calcularDescuento= (descuento) =>{this.precio=this.precio-descuento}
            }
        }
        const shorttommy = new ShortTommy ("SHORT TOMMY NISSIE","38,44,50", 1200, false)
        console.log(shorttommy)

        //LOCAL STORAGE
        localStorage.setItem("ShortTommy", JSON.stringify(shorttommy));
        console.log(localStorage.getItem("ShortTommy"))
    })
}


//API DE DOLAR AL DIA
function api (){
    const url= "cont1-virtual1.certisend.com/web/container/api/v1"

    fetch (url)
    .then((resultado)=>resultado.json())
    .then((json)=>console.log(json.resultado))  
}