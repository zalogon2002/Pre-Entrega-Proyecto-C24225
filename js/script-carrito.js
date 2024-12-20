document.addEventListener("DOMContentLoaded", () => {

    //Funciones del Carrito

  const carritoItemsStorage = JSON.parse(localStorage.getItem("carrito")) || [];
  const carritoTableBody = document.getElementById("carrito_productos");
  const carritoTotal = document.getElementById("total_carrito");
  let totalCompra = 0;

  carritoItemsStorage.forEach(item =>
  {
    const row = document.createElement("tr");

    var nombreCelda = document.createElement("td");
    nombreCelda.textContent = item.title
    row.appendChild(nombreCelda);

    const precioCelda = document.createElement("td");
    precioCelda.textContent = `$${item.price}`;
    row.appendChild(precioCelda);

    const cantidadCelda = document.createElement("td");
    cantidadCelda.textContent = 1;
    row.appendChild(cantidadCelda);

    const subtotal = item.price;
    const subtotalCelda = document.createElement ("td");
    subtotalCelda.textContent = `$${subtotal}`;
    row.appendChild(subtotalCelda);

  carritoTableBody.appendChild(row);
  totalCompra += subtotal;  
})
  carritoTotal.textContent = totalCompra.toFixed(2);

});