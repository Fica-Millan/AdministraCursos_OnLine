// DATOS DE LOS CURSOS ----------------------------------------------------------------------------------
const cursos = [
    { id: 1, nombre: 'Contabilidad Básica', precio: 32000 },
    { id: 2, nombre: 'Contabilidad Avanzada', precio: 35000 },
    { id: 3, nombre: 'Contabilidad de Costos', precio: 35000 },
    { id: 4, nombre: 'Administración de Personal', precio: 31000 },
    { id: 5, nombre: 'Administración Financiera', precio: 33000 },
    { id: 6, nombre: 'Administración de Proyectos', precio: 39000 },
    { id: 7, nombre: 'Principios del Marketing', precio: 29000 },
    { id: 8, nombre: 'Marketing Empresarial', precio: 41000 },
    { id: 9, nombre: 'Marketing de Servicios', precio: 35000 },
    { id: 10, nombre: 'Dirección General', precio: 52000 },
    { id: 11, nombre: 'Auditoría de Procesos', precio: 35000 },
    { id: 12, nombre: 'Planificación Estratégica', precio: 28000 },
];


// FUNCION PARA MOSTRAR LOS CURSOS EN LA PAGINA ---------------------------------------------------------
function mostrarCursos() {
    const cursosContenedor = document.getElementById('cursos');
    const cursoElementos = [];

    cursos.forEach(curso => {
        const cursoElemento = document.createElement('div');
        cursoElemento.classList.add('curso');

        cursoElemento.innerHTML = `
            <h3>${curso.nombre}</h3>
            <p>Precio: $ ${curso.precio.toLocaleString()}</p>
            <button onclick="agregarAlCarrito(${curso.id})">Agregar al carrito</button>`;
        cursoElementos.push(cursoElemento);
    });
    cursosContenedor.append(...cursoElementos);
}

mostrarCursos(); // llamada a la funcion para mostrar lso cursos 

// ACTUALIZAR EL NUMERO DENTRO DEL CARRITO DE COMPRAS Y LOCALSTORAGE-------------------------------------
let contarItem = 0;

function agregarCarrito() {
    contarItem++;
    actualizarContador();
}

function actualizarContador() {
    const actualizarContador = document.querySelector('.contador');
    actualizarContador.textContent = contarItem;
}

function agregarAlCarrito(cursoId) {
    const cursoSeleccionado = cursos.find(curso => curso.id === cursoId);

    if (cursoSeleccionado) {
        console.log(`Curso agregado al carrito: ${cursoSeleccionado.nombre}`);

        //Obtener el carrito actual del localStorage
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        //Agregar el nuevo curso al carrito
        carrito.push(cursoSeleccionado);

        //Guardar el carrito actualizado en el localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        agregarCarrito();

        mostrarModal(`Curso agregado al carrito: ${cursoSeleccionado.nombre}`);   
    }
}

actualizarContador(); // actualiza el n° de elementos en el carrito

agregarAlCarrito(); // guarda en el localStorage

// REDIRIGIR A LA PAGINA CONTACTO
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('boton-contacto').addEventListener('click', function () {
        window.location.href = './pages/contactanos.html';
    });
});

//FUNCION PARA MOSTRAR MENSAJE AL AGREGAR CURSO AL CARRITO
function mostrarModal(mensaje) {
    const modal = document.getElementById('modal');
    const mensajeModal = document.getElementById('mensaje-modal');

    mensajeModal.textContent = mensaje;
    modal.style.display = 'block';

    // Cierra el mensaje después de 2 segundos
    setTimeout(() => {
        cerrarModal(); // Llamada a la funcion
    }, 2000);
}

function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}