let productos = [];
fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        guardarLocal = (productos);
    })

const shopContent = document.getElementById("shopContent");
const comprar = document.getElementsByClassName("comprar")
const abrirCarrito = document.getElementById("abrirCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = [];

bebidas.forEach ((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3> ${product.bebida}</3>
    <p class="precio">${product.precio} $</p>
    `;
    shopContent.append(content);

    let comprar = document.createElement("button");

    comprar.innerText = "comprar";

    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(to right, #219ebc, #219ebc)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
            },
            offset: {
                x: '1.5rem', 
                y: '1.5rem' 
            },
            onClick: function(){} 
        }).showToast();
    })

    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id );
        if(repeat){
            carrito.map((prod) => {
                if (prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else  {
        carrito.push({
            id: product.id,
            img: product.img,
            bebida: product.bebida,
            precio: product.precio,
            cantidad : product.cantidad,
        })
        }
        carritoCounter();
        guardarLocal();
    });
});


const guardarLocal = () => {
    localStorage.setItem("product", JSON.stringify (carrito));
}
