class Product {
    constructor(calzado, marca, precio, cantidad){
        this.calzado = calzado;
        this.marca = marca;
        this.precio =  parseInt(precio);        
        this.cantidad = cantidad;
    }

total() {
    return this.precio * 1.16;
}  


}

const calzado1 = new Product("Tenis", "Nike",2500,5);
const calzado2 = new Product("Botas", "Dr Martens",3500,5);
const calzado3 = new Product("Zapato", "Flexi",800,5);
const calzado4 = new Product("Sandalia", "Crocks",300,5);
const calzado5 = new Product("Pantufla", "Walmart",200,5);

let calzadoArray = [
    calzado1,
    calzado2,
    calzado3,
    calzado4,
    calzado5
]

//console.log(`Inventario actual ${calzadoArray.calzado}, ${calzadoArray.marca}, ${calzadoArray.precio}, ${calzadoArray.cantidad} `)
console.log(calzadoArray);

let agregarCalzado = prompt(`Desea agregar nuevo calzado que no estan en stock?
Presione Si para hacerlo o No para continuar
`)

function calzadoNuevo (){
    if (agregarCalzado === "si" || agregarCalzado === "Si" || agregarCalzado === "SI"){
        for (let i = 0; i < 1 ; i++){
            let calzado = prompt("Ingrese el tipo de calzado");
            let marca = prompt("Ingrese la marca del zapato");
            let precio = prompt("Ingrese el precio");
            let cantidad = prompt("Ingrese la cantidad");
        
            calzadoArray.push(new Product(calzado,marca,precio,cantidad));
        }

        alert("Calzado agregado")
        console.log(calzadoArray)

    }else if(agregarCalzado === "no" || agregarCalzado === "No" || agregarCalzado === "NO"){
        alert("Gracias")
        console.log(calzadoArray)
    }

} 

calzadoNuevo()