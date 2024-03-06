var links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var Id = this.getAttribute('href').substring(1);
        var elemento = document.getElementById(Id);
        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(function () {
                window.scrollBy(0, -50);
            }, 500);
        }
    });
});


