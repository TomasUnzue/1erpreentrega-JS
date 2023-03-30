const urlProductos = "https://amazon-product-price-data.p.rapidapi.com/product?asins=B005YQZ1KE%2CB074R8RQQ2&locale=US";
const listaProductos = document.querySelectorAll("lista-productos");

fetch("https://amazon-product-price-data.p.rapidapi.com/product?asins=B005YQZ1KE%2CB074R8RQQ2&locale=US")
    .then((Response) =>Response.json())
    .then((data) => {
        console.log(data);
        data.forEach( data => {
            const li = document.createElement("li");
            li.innerHTML = data ;
            listaProductos.append(li);
        } )
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
            background: "linear-gradient(to right, #4b33a8, #785ce9)",
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
        console.log(repeat);
        if(repeat){
            carrito.map((prod) => {
                if (prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else {
        carrito.push({
            id: product.id,
            img: product.img,
            bebida: product.bebida,
            precio: product.precio,
            cantidad : product.cantidad,
        })
        }
        console.log(carrito);
        carritoCounter();
        guardarLocal();
    });
});


const guardarLocal = () => {
    localStorage.setItem("product", JSON.stringify (carrito));
}
