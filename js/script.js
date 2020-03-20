// JQUERY


// ambil data json with ajax
function tampilkanSemuaMenu() {
    $.getJSON('data/pizza.json', function (data) {
        // untuk mengambil isi data menu
        let menu = data.menu;

        $('#daftar-menu').empty();
        // perulangan pada JQUERY, looping terhadap object "$.each()"
        $.each(menu, function (i, data) {
            $('#daftar-menu').append('<div class="col-md-4 mb-4 "><div class="card"><img src="img/pizza/' + data.gambar + '"class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp.' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        });
    });
}

tampilkanSemuaMenu();


// JQUERY cari kelas yg namanya nav-link lalu diklik akan menjalankan fungsi berikut..
$('.nav-link').on('click', function () {

    // remove all active class
    $('.nav-link').removeClass('active');

    // this -> khusus yg diklik
    $(this).addClass('active');

    // $(this).html() -> ambil htmlnya (yang sedang diklik)
    let kategori = $(this).html();

    // ambil element html kemudian diganti dengan kategori
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        tampilkanSemuaMenu();
        return;
    }

    // manual menggabung string html
    // get json data dulu
    $.getJSON('data/pizza.json', function (data) {
        // ambil menu
        let menu = data.menu;
        // content
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {

                content += '<div class="col-md-4 mb-4 "><div class="card"><img src="img/pizza/' + data.gambar + '"class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp.' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            };
        });

        /* menyuruh JQUERY mencarikan id daftar-menu pada html
        kemudian menggantinya dengan konten */
        $('#daftar-menu').html(content);
    });


});