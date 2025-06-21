// JavaScript
let carrito = [];
let productos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 10.99
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 5.99
  }
];actualizarCarrito(); {
// Agregar evento a los botones de agregar al carrito
document.querySelectorAll(".agregar-btn").forEach((boton) => {
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    let idProducto = parseInt(boton.id.split("-")[1]);
    let cantidad = parseInt(document.getElementById(cantidad-$,{idProducto}).value);
    agregarAlCarrito(idProducto, cantidad);
  });
})};

// Función para agregar producto al carrito
function agregarAlCarrito(idProducto, cantidad) {
  let producto = productos.find((p) => p.id === idProducto);
  if (producto) {
    let existeEnCarrito = carrito.find((p) => p.id === idProducto);
    if (existeEnCarrito) {
      existeEnCarrito.cantidad += cantidad;
    } else {
      carrito.push({
        id: idProducto,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad
      });
    }
    actualizarCarrito();
  }
}
// Función para actualizar el carrito en la interfaz
