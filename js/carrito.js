const pintarCarrito = () => {
    
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    modalbutton.addEventListener ("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);


    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src=" ${product.img}" >
        <h3> ${product.bebida} </h3>
        <p> ${product.precio} $</p>
        <p>cantidad : ${product.cantidad} </p>
        <p>total : ${product.cantidad * product.precio} </p>
        `;

        modalContainer.append(carritoContent);

        console.log(carrito.length);
        let eliminar = document.createElement("span")
        eliminar.innerText = "❌";
        eliminar.className = "borrar-product";
        carritoContent.append(eliminar);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0 );
    const montoFinal = document.createElement("div")
    montoFinal.className = "total-content"
    montoFinal.innerHTML = `total a pagar : ${total} $ `;
    modalContainer.append(montoFinal);
};

abrirCarrito.addEventListener("click", pintarCarrito);


const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    pintarCarrito();
};
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
}