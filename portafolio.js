const grid = new Muuri('.grid', { layout: { rounding: false } });

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('images-load');

    const enlaces = document.querySelectorAll('#header-categories a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => { enlace.classList.remove('active'); }); 
            evento.target.classList.add('active');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'all' ?  grid.filter('[data-categories]') : grid.filter(`[data-categories = "${categoria}"]`);
        });
    });
});



