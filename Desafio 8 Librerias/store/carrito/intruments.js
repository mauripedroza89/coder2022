console.log("probando 123");


const btn = document.getElementById('addbtn');

btn.addEventListener('click', () => {
    Swal.fire({
        title: 'Agregado al carrito!',
        text: 'Gracias por tu compra',
        imageUrl: 'https://w7.pngwing.com/pngs/404/687/png-transparent-musical-instruments-mandolin-electronic-keyboard-cello-musical-instruments-logo-violin-drum.png',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
}) 
