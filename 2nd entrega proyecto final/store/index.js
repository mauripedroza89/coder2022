
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



const prod1 = new Product("Guitarra", "Gibson",10000,1);
const prod2 = new Product("Guitarra", "Ibanez",6000,2);
const prod3 = new Product("Guitarra", "Fender",8000,3);
const prod4 = new Product("Bateria", "Pearl",18000,4);


let prodArray = [
    prod1,
    prod2,
    prod3,
    prod4

]

//inventario inicial
alert("Bienvenido a Guitar Center, checa el inventario o agrega nuevos productos")
console.log(prodArray);

//Lista mostrada en html
let productosLista = document.getElementById("lista");

for (const producto of prodArray){
    let li = document.createElement("tr");

    li.innerHTML = `  <tr>
    <th scope="row">${producto.cantidad}</th>
    <td>${producto.instrumento}</td>
    <td>${producto.marca}</td>
    <td>${producto.precio}</td>
    <td><button>Agregar al carrito</button></td>
  </tr>
`;
    productosLista.appendChild(li);
}





console.log(`Inventario nuevo ${prodArray}`)

//Sino agregamos instrumentos nuevos, procedemos a hacer una compra con el inventario existente
let nombre = prompt("Ingrese su nombre para el pedido.");