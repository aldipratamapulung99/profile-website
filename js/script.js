document.addEventListener('DOMContentLoaded', function () {
    // Menu mobile
    var tombol = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    if (tombol && menu) {
        tombol.addEventListener('click', function () {
            menu.classList.toggle('terbuka');
        });

        // Tutup menu setelah salah satu link diklik (khusus tampilan mobile)
        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menu.classList.remove('terbuka');
            });
        });
    }

    // Tahun otomatis di footer
    var tahunEl = document.getElementById('tahun');
    if (tahunEl) {
        tahunEl.textContent = new Date().getFullYear();
    }
});
