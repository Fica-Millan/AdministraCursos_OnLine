// I N F O R M A C I O N   D E   L O S   C U R S O S   S E L E C C I O N A D O S -----------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    mostrarDetallesCarrito();

    document.getElementById('boton-finalizar-compra').addEventListener('click', function () {
        // aca iría la lógica para finalizar la compra
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
    }

    else {
        // Calcular el total de la compra
        const total = carrito.reduce((acumulador, curso) => acumulador + curso.precio, 0);

        // Generar HTML para los detalles del carrito y el total de la compra
        const detallesHTML = carrito.map(curso => `<p>${curso.nombre} - $${curso.precio.toLocaleString()}</p>`).join('');
        const totalHTML = `<div id="total-carrito"><p><strong>TOTAL:</strong> $${total.toLocaleString()}</p></div>`;

        // Mostrar los detalles del carrito y el total en el contenedor
        carritoContenedor.innerHTML = `<h3>DETALLE DE LA COMPRA:</h3>${detallesHTML}${totalHTML}`;
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
    Swal.fire({
        title: "¿Estás seguro de vaciar el carrito?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar"
    })

        .then((result) => {
            if (result.isConfirmed) {
                // Limpiar el carrito
                localStorage.removeItem('carrito');

                contarItem = 0;
                actualizarContador();

                mostrarMensajeCarritoVacio();

                Swal.fire({
                    title: "Se vació el carrito.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });

            } else if (result.isDenied) {
                // No hacer nada si el usuario no desea vaciar el carrito
            }
        });
}

function mostrarMensajeCarritoVacio() {
    const carritoContenedor = document.getElementById('carrito-contenedor');
    carritoContenedor.innerHTML = '<p>El carrito está vacío.</p>';
}

function mostrarModalFinalizarCompra() {
    const modalFinalizarCompra = document.getElementById('modal-finalizar-compra');
    modalFinalizarCompra.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    const botonCerrarModal = document.getElementById('boton-cerrar-modal');

    botonCerrarModal.addEventListener('click', function () {
        cerrarModalFinalizarCompra();
    });
});

function cerrarModalFinalizarCompra() {
    const modalFinalizarCompra = document.getElementById('modal-finalizar-compra');
    modalFinalizarCompra.style.display = 'none';
}

