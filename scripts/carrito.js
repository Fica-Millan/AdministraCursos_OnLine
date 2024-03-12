// INFORMACION DE LOS CURSOS SELECCIONADOS---------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    mostrarDetallesCarrito();

    document.getElementById('boton-finalizar-compra').addEventListener('click', function () {
        // aca iria la lógica para finalizar la compra
        mostrarModalFinalizarCompra();
    });
});

function mostrarDetallesCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContenedor = document.getElementById('carrito-contenedor');

    if (carrito.length === 0) {
        carritoContenedor.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        const detallesHTML = carrito.map(curso => `<p>${curso.nombre} - $${curso.precio.toLocaleString()}</p>`).join('');
        carritoContenedor.innerHTML = `<h3>Detalle de la compra</h3>${detallesHTML}`;
    }
}

function mostrarModalFinalizarCompra() {
    const modalFinalizarCompra = document.getElementById('modal-finalizar-compra');
    modalFinalizarCompra.style.display = 'block';
}

function cerrarModalFinalizarCompra() {
    const modalFinalizarCompra = document.getElementById('modal-finalizar-compra');
    modalFinalizarCompra.style.display = 'none';
}