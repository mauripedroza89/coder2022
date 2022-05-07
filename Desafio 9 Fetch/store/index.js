


//Lista mostrada en html
const lista = document.querySelector("#lista");

const printLista = async () => {
    const resp = await fetch('./instrumentos.json');
    const data = await resp.json();

    data.forEach(post =>{
        let li = document.createElement("tr");

        li.innerHTML = `  <tr>
                <th scope="row">${post.id}</th>
                <td>${post.instrumento}</td>
                <td>${post.marca}</td>
                <td>$${post.precio}</td>
                <td><img class="image"src="${post.img}"></td>
                <td><button id="addbtn">Agregar al carrito</button></td>
                         </tr>
`;

            lista.appendChild(li);
    })
}

printLista()




//Sino agregamos instrumentos nuevos, procedemos a hacer una compra con el inventario existente
//let nombre = prompt("Ingrese su nombre para el pedido.");



