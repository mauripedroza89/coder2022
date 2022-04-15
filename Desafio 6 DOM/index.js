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
  
  //Lista mostrada en html
  let productosLista = document.getElementById("prodlist");

  for (const producto of comidaElegida){
      let li = document.createElement("div");

      li.innerHTML = `  <p>Productos</p>
                        <li class="div">
                        <p> Producto: ${producto.alimento} </p> 
                        <p> Precio: ${producto.precio}  </p>
                        <button> Agregar</button>
                      </li>`;
      productosLista.appendChild(li);
  }

  let nombre = prompt("Ingrese su nombre para el pedido.");

  let nombrePrint = document.getElementById("infopersona");
  let p = document.createElement("h1");
  p.innerHTML = `<p> Comprador: ${nombre} </p>`;
  nombrePrint.appendChild(p);

  let eleccion = prompt(`Buen dia ${nombre}, elija los alimentos que desea comprar:
        Presione 1 para ${producto1.alimento}, precio $${producto1.precio}
        Presione 2 para ${producto2.alimento}, precio $${producto2.precio}
        Presione 3 para ${producto3.alimento}, precio $${producto3.precio}
        Presione 4 para ${producto4.alimento}, precio $${producto4.precio}
        Presione 5 para ${producto5.alimento}, precio $${producto5.precio}
        Presione 6 para ${producto6.alimento}, precio $${producto6.precio}
        Presione 7 para ${producto7.alimento}, precio $${producto7.precio}
  `)

  let total = 0;

  function elegirComida(){
      while(eleccion != "NO"){

        console.log(`${nombre} has comprado ${comidaElegida[eleccion-1].alimento}`);
       
        total += comidaElegida[eleccion-1].precioTotal();
       
        eleccion = prompt(`${nombre}, deseas seguir comprando?
        Elije que alimento quieres comprar o escribe NO para terminar tu compra,
        Presione 1 para ${producto1.alimento}, precio $${producto1.precio}
        Presione 2 para ${producto2.alimento}, precio $${producto2.precio}
        Presione 3 para ${producto3.alimento}, precio $${producto3.precio}
        Presione 4 para ${producto4.alimento}, precio $${producto4.precio}
        Presione 5 para ${producto5.alimento}, precio $${producto5.precio}
        Presione 6 para ${producto6.alimento}, precio $${producto6.precio}
        Presione 7 para ${producto7.alimento}, precio $${producto7.precio}
        `)

        console.log(`Su total es de $${total}`)

        //imprimir eleccion de alimentos 
let productosElegidos = document.getElementById("eleccion");
//Tengo problemas para identificar el arreglo del cual imprimir los productos elegidos,
//en mi console.log me muestra lo que elegi, pero al usar DOM no me imprime lo del console.log
for (const producto of eleccion){
    let div = document.createElement("div");

    div.innerHTML = ` 
                      <div>
                      <p> Producto: ${producto.alimento} </p> 
                      <p> Precio: ${producto.precio}  </p>
                      </div>`;
  productosElegidos.appendChild(div);

        //imprimir total
        let totalPrint = document.getElementById("total");
  let p2 = document.createElement("h1");
  p2.innerHTML = `<p> Total a pagar: ${parseInt(total)} </p>`;
  totalPrint.appendChild(p2);
      

    }   
  }
}

elegirComida();




function pagar(){
    let formaPago = parseInt(prompt(`${nombre}, el total de tu compra es de $${total} pesos, ejile tu forma de pago:
    1 para Tarjeta de Credito/Debito,
    2 para PayPal
     `))

    if (formaPago === 1 ){
        let pago = ("Ingresa tu informacion de pago:");

        alert (`${nombre}, transaccion completada, gracias por tu compra!
        Detalles de tu compra:
        El total de tus alimentos es de $${parseInt(total)}
        Gracias, vuelve pronto!
        `)
//imprimir 
        let pagoPrint = document.getElementById("total");
        let p3 = document.createElement("p");
        p3.innerHTML = `<p>${nombre}, transaccion completada, gracias por tu compra!
        Detalles de tu compra:
        El total de tus alimentos es de $${parseInt(total)}
        Gracias, vuelve pronto!
        <p>`;
        pagoPrint.appendChild(p3);

    }else if(formaPago === 2){
        let pago = ("Inicia sesion para pagar:");

        let pagoDiferido = parseInt(prompt(`${nombre}, elige tus meses a pagar:
        1 para 1 pago sin intereses,
        2 para 6 meses con 10% de intereses,
        3 para 12 meses con 15% de intereses`)) 

        let intereses = 0;
        let diferido = 0;

        switch (pagoDiferido) {
            case 1:
               total += intereses;

               alert (`${nombre}, transaccion completada, gracias por tu compra!
                        Detalles de tu compra:
                        El total de tus alimentos es de $${parseInt(total)}
                        Gracias, vuelve pronto!
                        `)
            //imprimir
            //imprimir 
                let pagoPrint = document.getElementById("total");
                let case1 = document.createElement("p");
                case1.innerHTML = `<p>${nombre}, transaccion completada, gracias por tu compra!
                Detalles de tu compra:
                El total de tus alimentos es de $${parseInt(total)}
                Gracias, vuelve pronto!
                <p>`;
                pagoPrint.appendChild(case1); 
            break;
            case 2:
                intereses = total * 0.10;
               total += intereses;

               alert (`${nombre}, transaccion completada, gracias por tu compra!
                        Detalles de tu compra:
                        El total de tus alimentos es de $${parseInt(total)}
                        Gracias, vuelve pronto!
                        `)
                //imprimir 
                let pago2Print = document.getElementById("total");
                let case2 = document.createElement("p");
                case2.innerHTML = `<p>${nombre}, transaccion completada, gracias por tu compra!
                Detalles de tu compra:
                El total de tus alimentos es de $${parseInt(total)}
                Gracias, vuelve pronto!
                <p>`;
                pago2Print.appendChild(case2);
            break;
            case 3:
                intereses = total * 0.15;
               total += intereses;

               alert (`${nombre}, transaccion completada, gracias por tu compra!
                        Detalles de tu compra:
                        El total de tus alimentos es de $${parseInt(total)}
                        Gracias, vuelve pronto!
                        `)
                //imprimir 
                let pago3Print = document.getElementById("total");
                let case3 = document.createElement("p");
                case3.innerHTML = `<p>${nombre}, transaccion completada, gracias por tu compra!
                Detalles de tu compra:
                El total de tus alimentos es de $${parseInt(total)}
                Gracias, vuelve pronto!
                <p>`;
                pago3Print.appendChild(case3);
            break;
        
            default:
                break;
        }

        alert (`${nombre}, transaccion completada, gracias por tu compra!
        Detalles de tu compra:
        El total de tus alimentos es de $${total}
        Gracias, vuelve pronto!
        `)
        //imprimir 
        let pagoBueno = document.getElementById("gracias");
        let pagobueno = document.createElement("p");
        pagobueno.innerHTML = `<p>${nombre}, transaccion completada, gracias por tu compra!
        Detalles de tu compra:
        El total de tus alimentos es de $${total}
        Gracias, vuelve pronto!
        <p>`;
        pagoBueno.appendChild(pagobueno);

    }else{
        alert(`${nombre}, no se pudo realizar el pago, intenta de nuevo, gracias.`)
        //imprimir 
        let pagoMalo = document.getElementById("gracias");
        let pagomalo = document.createElement("p");
        pagomalo.innerHTML = `<p>${nombre}, no se pudo realizar el pago, intenta de nuevo, gracias.
        <p>`;
        pagoMalo.appendChild(pagomalo);
    }
}

pagar()