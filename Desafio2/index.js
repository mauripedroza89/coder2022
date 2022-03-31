const tienda = [
    {
    nombre: "jamon", 
    precio: 5
    },
    {
        nombre: "lechuga", 
        precio: 3
    },
    {
        nombre: "pan", 
        precio: 3
    },
    {
        nombre: "cerveza", 
        precio: 8
    },
    {
        nombre: "huevo", 
        precio: 5
    },
    {
        nombre: "leche", 
        precio: 4
    },  
    {
        nombre: "carne", 
        precio: 7
    }                
]

let eligeComida = ""
let total = 0;


tienda.forEach(function(comida){
 eligeComida = prompt("Elija el producto que desea comprar: Jamon, Lechuga, Pan, Cerveza, Huevo, Leche o Carne")
    if(comida.nombre = ["jamon" , "lechuga" , "pan" ,"cerveza","huevo","leche","carne"]){
        for (let i=0; i < comida.precio.length; i++){
            total <= parseInt(comida.precio[i]);
    }
    
  }else{

  }
 }
)
console.log(eligeComida);















// pruebas random


/* for (let i=0; i < tienda.length; i++){
    eligeComida = tienda[i]
  
 }


class Productos {
    constructor(nombre, precio){
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio);
    }

    sumaIva() {
        this.precio = this.precio * 1.30;
    }

} */


//let eligeComida = prompt("Elija el producto que desea comprar: Jamon, Lechuga, Pan, Cerveza, Huevo, Leche o Carne")


/* while (tienda != "ESC"){
    if (listaComida = tienda.nombre){
        alert(`el total es ${this.tienda.precio}`)
        break;
    }else{
        alert("debe elegir 1");
        break;
    }
}
console.log(eligeComida) */

//let listaComida = prompt("Elija el producto que desea comprar: Jamon, Lechuga, Pan, Cerveza, Huevo, Leche o Carne")
//console.log(listaComida)

 /* let costoTotal = 0

 */