// D A T O S   D E   L O S   C U R S O S  --------------------------------------------------------------------------------
const cursos = [];
const URL = './scripts/cursos.json'

// Función para cargar los cursos en la página
function cargarCursos() {
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

// Función para obtener los productos desde el archivo JSON
async function mostrarCursos() {
    try {

        const response = await fetch(URL);

        if (response.ok) {
            const data = await response.json();
            cursos.push(...data);
            cargarCursos();

        } else {
            throw new Error("No se pudo cargar los productos.");
        }

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Ocurrió un error al intentar mostrar los cursos disponibles: ${error.message}`,
            footer: '<a href="mailto:ficamillan@gmail.com">Comuniquese con el desarrollador.</a>'
        });
    }
}

// Llama a la función para obtener los cursos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes("index")) {
        mostrarCursos();
    }
});

// A C T U A L I Z A R   E L     N U M E R O   D E N T R O   D E L   C A R R I T O   Y   L O C A L S T O R A G E ---------
let contarItem = JSON.parse(localStorage.getItem("carrito"))?.length || 0;

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

    try {

        if (cursoSeleccionado) {
            //Obtener el carrito actual del localStorage
            const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            //Agregar el nuevo curso al carrito
            carrito.push(cursoSeleccionado);

            //Guardar el carrito actualizado en el localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));

            agregarCarrito();

            Swal.fire({
                title: `${cursoSeleccionado.nombre}\nse agregó al carrito`,
                icon: "success",
                imageUrl: "./assets/agregadoCarrito.webp",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Imagen personalizada",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocurrió un error al agregar el curso al carrito.",
            footer: '<a href="../pages/contactanos.html">Por favor contactenos.</a>'
        });
    }
}

actualizarContador(); // actualiza el n° de elementos en el carrito

agregarAlCarrito(); // guarda en el localStorage


// M E N U   H A M B U R G U E S A 
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});



// R E D I R I G I R   A   L A   P A G I N A   C O N T A C T O -----------------------------------------------------------
if (window.location.href.includes("index")) {
    document.addEventListener("DOMContentLoaded", function () {
        document
            .getElementById("boton-contacto")
            .addEventListener("click", function () {
                window.location.href = "./pages/contactanos.html";
            });
    });
}