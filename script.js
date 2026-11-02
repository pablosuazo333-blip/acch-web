// Botones/enlaces con data-scroll: desplazan suavemente hasta la sección
// indicada (por ejemplo, los datos de contacto al final de la página).
document.querySelectorAll('[data-scroll]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    target.focus({ preventScroll: true });
    history.replaceState(null, '', link.getAttribute('href'));
  });
});
