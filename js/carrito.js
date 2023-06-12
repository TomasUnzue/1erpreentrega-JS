const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((product) => {
        let cartContent = document.createElement("div");
        cartContent.className = "modal-content";
        cartContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.bebida}</h3>
        <p>${product.precio} $</p>
        <p>cantidad : ${product.cantidad}</p>
        <p>total : ${product.cantidad * product.precio}</p>
        `;

        modalContainer.append(cartContent);

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "borrar-product";
        cartContent.append(eliminar);

        eliminar.addEventListener("click", () => {
            Swal.fire({
                title: 'Desea eliminar producto?',
                text: "El producto se eliminará de su carrito!",
                icon: 'warning',
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'SI',
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarProducto(product.id);
                }
            })
        });
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const totalContent = document.createElement("div");
    totalContent.className = "total-content";
    totalContent.innerHTML = `total a pagar : ${total} $ `;
    modalContainer.append(totalContent);
};

const eliminarProducto = (id) => {
    carrito = carrito.filter((carritoId) => carritoId.id !== id);
    carritoCounter();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    cantidadCarrito.innerText = carritoLength;
};

abrirCarrito.addEventListener("click", pintarCarrito);

carritoCounter();