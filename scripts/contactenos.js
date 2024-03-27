document.addEventListener('DOMContentLoaded', function () {
    const formularioContacto = document.getElementById('formulario-contacto');
    const preferenciaSeleccion = document.getElementById('preferencias');
    const preferenciaHorario = document.getElementById('horario');
    const mensajeConfirmacion = '¡Consulta enviada con éxito!\nNos pondremos en contacto pronto.';

    // Obtener consultas anteriores del localStorage o inicializar un array vacío
    const consultasAnteriores = JSON.parse(localStorage.getItem('consultas')) || [];

    // Envío del formulario de consulta
    formularioContacto.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener el mensaje del textarea
        const mensaje = document.getElementById('mensaje').value;

        // Guardar el mensaje en el array de consultas
        consultasAnteriores.push(mensaje);

        // Guardar el array de consultas en el localStorage
        localStorage.setItem('consultas', JSON.stringify(consultasAnteriores));

        Swal.fire({
            icon: "success",
            title: mensajeConfirmacion,
            showConfirmButton: false,
            timer: 2200
        });

        // Limpia el formulario después de enviarlo
        formularioContacto.reset();

        // Evitar la propagación del evento
        event.stopPropagation();
    });

    // Opciones de preferencia de contacto
    const opcionesPreferencias = [
        { value: 'telefono', text: 'Teléfono' },
        { value: 'whatsapp', text: 'WhatsApp' },
        { value: 'mail', text: 'Correo Electrónico' },
    ];

    // Agregar las opciones al select de preferencias
    opcionesPreferencias.forEach(opcion => {
        const opcionPreferencia = document.createElement('option');
        opcionPreferencia.value = opcion.value;
        opcionPreferencia.text = opcion.text;
        preferenciaSeleccion.appendChild(opcionPreferencia);
    });

    // Opciones de preferencia de horario de contacto
    const opcionesHorario = [
        { value: 'mañana', text: 'Por la mañana.' },
        { value: 'tarde', text: 'Por la tarde.' },
        { value: 'ambos', text: 'Durante el día.' },
    ];

    // Agregar las opciones al select de horario
    opcionesHorario.forEach(opcion => {
        const opcionHorario = document.createElement('option');
        opcionHorario.value = opcion.value;
        opcionHorario.text = opcion.text;
        preferenciaHorario.appendChild(opcionHorario);
    });
});