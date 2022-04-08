class Product {
    constructor(instrumento, precio, marca, cantidad){
        this.instrumento = instrumento;
        this.precio =  parseInt(precio);
        this.marca = marca;
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

let prodArray = [
    {
        "intrumento": "Guitarra",
        "marca": "Gibson",
        "precio": 10000,
        "cantidad": 5
    },
    {
        "intrumento": "Guitarra",
        "marca": "Fender",
        "precio": 8000,
        "cantidad": 5
    },
    {
        "intrumento": "Guitarra",
        "marca": "Ibanez",
        "precio": 6000,
        "cantidad": 5
    }
]

let nombre = prompt("Ingrese su nombre para el pedido.");

let eleccion = prompt(`Buen dia ${nombre}, elija los instrumentos que desea comprar:
        Presione 1 para ${prodArray[0].intrumento} ${prodArray[0].marca}, precio $${prodArray[0].precio}
        Presione 2 para ${prodArray[1].intrumento} ${prodArray[1].marca}, precio $${prodArray[1].precio}
        Presione 3 para ${prodArray[2].intrumento} ${prodArray[2].marca}, precio $${prodArray[2].precio}
        
  `)

  let total = 0;

  function elegirInstrumento(){
      while(eleccion != "NO" || eleccion != "No" || eleccion != "no"){

        console.log(`${nombre} has comprado ${prodArray[eleccion-1].Instrumento} ${prodArray[eleccion-1].Marca}`);
       
        total += prodArray[eleccion-1].precioTotal();
       
        eleccion = prompt(`${nombre}, deseas seguir comprando?
        Elije que alimento quieres comprar o escribe NO para terminar tu compra,
        Presione 1 para ${prodArray[0].intrumento} ${prodArray[0].marca}, precio $${prodArray[0].precio}
        Presione 2 para ${prodArray[1].intrumento} ${prodArray[1].marca}, precio $${prodArray[1].precio}
        Presione 3 para ${prodArray[2].intrumento} ${prodArray[2].marca}, precio $${prodArray[2].precio}
        
        `)

        console.log(`Su total es de $${total}`)
      }
  }

elegirInstrumento();

do {
    let checked = prompt("Debe agregar el nombre del producto o escriba 'fin' para terminar");
    if (checked === "fin" || checked || "Fin" || "FIN"){
        break;
    }else {
        prodName = checked;
        let prodPrice = prompt("Ingresar precio del producto");
        let prodLabel = prompt("Ingresar marca del producto");
        let prodQuant = prompt("Ingresar cantidad a comprar");
        prodArray.push(new Product(prodName, prodPrice, prodLabel, prodQuant));
    }
}
while (checked != "fin" || checked != "Fin" || checked != "FIN")

console.log(prodArray)