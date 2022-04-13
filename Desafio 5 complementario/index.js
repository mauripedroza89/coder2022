

class Producto{
    constructor(alimento, precio){
      this.alimento = alimento;
      this.precio = parseInt(precio);
    }
    
    precioTotal(){
      return this.precio * 1.16
    }
  }
  
  const producto1 = new Producto("Jamon",50);
  const producto2 = new Producto("Lechuga",30);
  const producto3 = new Producto("Pan",30);
  const producto4 = new Producto("Cerveza",80);
  const producto5 = new Producto("Huevo",50);
  const producto6 = new Producto("Carne",80);
  const producto7 = new Producto("Leche",20);
  
  let comidaElegida = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    
  ]

let saludo = alert("Bienvenido a Miselaneas")


  let agregarComida = prompt(`Ingrese la informacion para agregar nuevos productos
Presione Si para agregar y No para continuar`)

  let productosNuevos = [...comidaElegida]

  function nuevaComida(){
    if (agregarComida === "si" || agregarComida === "Si" || agregarComida === "SI"){
      for (let i = 0; i < 1 ; i++){
        let alimento = prompt("Nombre de la comida");
        let precio = prompt("Introduzca el precio");

        productosNuevos.push(new Producto(alimento, precio));
      }

      alert("Alimentos agregados con exito, revise la nueva lista")

    }else if(agregarComida === "no" || agregarComida === "No" || agregarComida === "NO"){
      alert("Gracias")
      console.log(productosNuevos)
    }
  }
  nuevaComida()

  
function mostrarAlimentos(){
   if (agregarComida === "si" || agregarComida === "Si" || agregarComida === "SI"){

    let productosLista = document.getElementById("prodlist");

  for (const producto of productosNuevos){
      let li = document.createElement("div");

      li.innerHTML = `  <p>Productos Nuevos</p>
                        <li class="div2">
                        <p> Producto: ${producto.alimento} </p> 
                        <p> Precio: ${producto.precio}  </p>
                        <button> Agregar</button>
                      </li>`;
      productosLista.appendChild(li);
  }

   }else if(agregarComida === "no" || agregarComida === "No" || agregarComida === "NO"){
    let productosLista = document.getElementById("prodlist");

    for (const producto of comidaElegida){
        let li = document.createElement("div");
  
        li.innerHTML = `  <p>Productos Originales</p>
                          <li class="div">
                          <p> Producto: ${producto.alimento} </p> 
                          <p> Precio: ${producto.precio}  </p>
                          <button> Agregar</button>
                        </li>`;
        productosLista.appendChild(li);
    }
    }

}

mostrarAlimentos()
  
