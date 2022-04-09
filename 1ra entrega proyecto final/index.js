class Product {
    constructor(instrumento, marca, precio, cantidad){
        this.instrumento = instrumento;
        this.marca = marca;
        this.precio =  parseInt(precio);        
        this.cantidad = cantidad;
        this.disponible = true;
    }

precioTotal() {
    return this.precio * 1.16;
}  

Vendido() {
    this.disponible = false;
}



}


const prod1 = new Product("Guitarra", "Gibson",10000,5);
const prod2 = new Product("Guitarra", "Ibanez",6000,5);
const prod3 = new Product("Guitarra", "Fender",8000,5);

let prodArray = [
    prod1,
    prod2,
    prod3   

]

//inventario inicial
alert("Bienvenido a Guitar Center, checa el inventario o agrega nuevos productos")
console.log(prodArray);

//Decidimos si agregar nuevos productos al inventario
let agregarProds = prompt(`Desea agregar nuevos instrumentos que no estan en stock?
Presione Si para hacerlo o No 
`)
function nuevoProd (){
    if (agregarProds === "si" || agregarProds === "Si" || agregarProds === "SI"){

        //Deseo saber como meter un while para parar de agregar productos con la tecla ESC
        for (let i = 0; i <2; i++){
            
            let instrumento = prompt("Ingrese el tipo de instrumento o presione ESC para terminar");
                let marca = prompt("Ingrese la marca del instrumento");
                let precio = prompt("Ingrese el precio del instrumento");
                let cantidad = prompt("Ingrese la cantidad");
            
            
        
            prodArray.push(new Product(instrumento,marca,precio,cantidad));
        }
    }else if(agregarProds === "no" || agregarProds === "No" || agregarProds === "NO"){
        alert("Gracias")
    }

} 
nuevoProd()


console.log(`Inventario nuevo ${prodArray}`)

//Sino agregamos instrumentos nuevos, procedemos a hacer una compra con el inventario existente
let nombre = prompt("Ingrese su nombre para el pedido.");

let eleccion = prompt(`Buen dia ${nombre}, elija los instrumentos que desea comprar:
        Presione 1 para ${prod1.instrumento} ${prod1.marca}, precio $${prod1.precio}
        Presione 2 para ${prod2.instrumento} ${prod2.marca}, precio $${prod2.precio}
        Presione 3 para ${prod3.instrumento} ${prod3.marca}, precio $${prod3.precio}
        
  `)

let total = 0;

  function elegirInstrumento(){
      while(eleccion != "NO" || eleccion != "No" || eleccion != "no"){

        console.log(`${nombre} has comprado ${prodArray[eleccion-1].instrumento} ${prodArray[eleccion-1].marca}`);
       
        total += prodArray[eleccion-1].precioTotal();
       
        eleccion = prompt(`${nombre}, deseas seguir comprando?
        Elije que alimento quieres comprar o escribe NO para terminar tu compra,
        Presione 1 para ${prod1.instrumento} ${prod1.marca}, precio $${prod1.precio}
        Presione 2 para ${prod2.instrumento} ${prod2.marca}, precio $${prod2.precio}
        Presione 3 para ${prod3.instrumento} ${prod3.marca}, precio $${prod3.precio}
        
        `)

        console.log(`Su total es de $${total}`)
      }
  }

elegirInstrumento();

