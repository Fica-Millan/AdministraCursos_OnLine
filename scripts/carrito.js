// INFORMACION DE LOS CURSOS SELECCIONADOS---------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    mostrarDetallesCarrito();

    document.getElementById('boton-finalizar-compra').addEventListener('click', function () {
        // aca iria la lógica para finalizar la compra
        mostrarModalFinalizarCompra();
    });

    document.getElementById('boton-vaciar-carrito').addEventListener('click', function () {
        limpiarCarrito();
    });
});

function mostrarDetallesCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContenedor = document.getElementById('carrito-contenedor');

    if (carrito.length === 0) {
        carritoContenedor.innerHTML = '<p>El carrito está vacío.</p>';
        ocultarBotonVaciarCarrito();
    } else {
        const detallesHTML = carrito.map(curso => `<p>${curso.nombre} - $${curso.precio.toLocaleString()}</p>`).join('');
        carritoContenedor.innerHTML = `<h3>Detalle de la compra</h3>${detallesHTML}`;
        mostrarBotonVaciarCarrito();
    }
}

function mostrarBotonVaciarCarrito() {
    document.getElementById('boton-vaciar-carrito').style.display = 'block';
}

function ocultarBotonVaciarCarrito() {
    document.getElementById('boton-vaciar-carrito').style.display = 'none';
}

function limpiarCarrito() {
    // Limpiar el carrito
    localStorage.removeItem('carrito');
    
    // Actualizar el contador
    contarItem = 0;
    actualizarContador();
    
    // Mostrar mensaje de carrito vacío
    mostrarMensajeCarritoVacio();
}

function mostrarMensajeCarritoVacio() {
    const carritoContenedor = document.getElementById('carrito-contenedor');
    carritoContenedor.innerHTML = '<p>El carrito está vacío.</p>';
}

function mostrarModalFinalizarCompra() {
    const modalFinalizarCompra = document.getElementById('modal-finalizar-compra');
    modalFinalizarCompra.style.display = 'block';
}

function cerrarModalFinalizarCompra() {
    const modalFinalizarCompra = document.getElementById('modal-finalizar-compra');
    modalFinalizarCompra.style.display = 'none';
}
