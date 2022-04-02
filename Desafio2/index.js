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
  
  console.log(producto1.precio);

  let nombre = prompt("Ingrese su nombre para el pedido.");

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
            break;
            case 2:
                intereses = total * 0.10;
               total += intereses;

               alert (`${nombre}, transaccion completada, gracias por tu compra!
                        Detalles de tu compra:
                        El total de tus alimentos es de $${parseInt(total)}
                        Gracias, vuelve pronto!
                        `)
            break;
            case 3:
                intereses = total * 0.15;
               total += intereses;

               alert (`${nombre}, transaccion completada, gracias por tu compra!
                        Detalles de tu compra:
                        El total de tus alimentos es de $${parseInt(total)}
                        Gracias, vuelve pronto!
                        `)
            break;
        
            default:
                break;
        }

        alert (`${nombre}, transaccion completada, gracias por tu compra!
        Detalles de tu compra:
        El total de tus alimentos es de $${total}
        Gracias, vuelve pronto!
        `)
    }else{
        alert(`${nombre}, no se pudo realizar el pago, intenta de nuevo, gracias.`)
    }
}

pagar()