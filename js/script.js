document.addEventListener("DOMContentLoaded", () => {
  
  const productosCard = document.getElementById("productos_card");

  function fetchProductos() {
    fetch("https://dummyjson.com/products?limit=12")
      .then((response) => response.json())
      .then((data) => {
        const productos = data.products;

        
        productosCard.innerHTML = "";

        
        productos.forEach((product) => {
          const cardDiv = document.createElement("div");
          cardDiv.className = "productos_nuevo"; 

          cardDiv.innerHTML = `
                <div class="card">
                    <picture class="productos_card_foto">
                        <img src="${product.thumbnail}" alt="${product.title}">
                    </picture>
                    <h3 class="poppins-bold">Producto:${product.title}</h3>
                    <p class="poppins-regular">${product.description}.</p>
                    <p class="poppins-bold">Precio:$${product.price}.</p>
                    <button class="productos_card_boton poppins-bold">Comprar</button>                    
                </div>
                `;

          
          const botonComprar = cardDiv.querySelector("button");
          botonComprar.addEventListener("click", () => {
            agregarAlCarrito(product);
          });

          
          productosCard.appendChild(cardDiv);
        });
      })
      .catch((error) => console.error("Error", error));
  }

  
  function agregarAlCarrito(product) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    carrito.push(product);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${product.title} ha sido agregado al carrito!`);
  }

    
  fetchProductos();
});


