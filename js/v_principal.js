/* Iniciamos la libreria de Muuri */
const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});

/* Al Cargar la pagina completa */
window.addEventListener('load', () => {
    // Accedemos al metodo de refrescar de muuri.
    grid.refreshItems().layout();

    // Agregamos la clase imagenes-cargadoas al contenedor grid.
    document.getElementById('grid').classList.add('imagenes-cargadas')

    // Agregamos listener para filtrado por categoria...
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

            /* Categorias */
            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
        });
    });

    // Filtrado por barra de busqueda.
    document.querySelector('#b_busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value.toLowerCase();
        grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
    });
});