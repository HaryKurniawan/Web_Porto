const contents = {
    1: {
        title: 'Berita Utama: Teknologi Terbaru 2024',
        date: '15 Oktober 2024',
        img: 'https://via.placeholder.com/800x400',
        body: 'Inilah perkembangan teknologi terbaru yang sangat menarik perhatian dunia di tahun 2024. Inovasi di bidang kecerdasan buatan, internet of things (IoT), dan blockchain terus berkembang pesat. Beberapa perusahaan besar telah meluncurkan produk-produk revolusioner yang diprediksi akan mengubah banyak aspek kehidupan manusia.',
        details: 'Kecerdasan buatan kini semakin matang dengan kemampuan yang mendekati otak manusia, IoT membantu menghubungkan perangkat secara lebih efisien, dan blockchain mempercepat adopsi dalam bidang keuangan dan logistik. Semua inovasi ini menghadirkan peluang baru untuk berbagai industri dan membuka jalan bagi masa depan yang lebih terhubung dan pintar.' 
    },
    2: {
        title: 'Berita Ekonomi: Pasar Global Mengalami Volatilitas',
        date: '12 Oktober 2024',
        img: 'https://via.placeholder.com/800x400',
        body: 'Pasar keuangan global sedang menghadapi periode volatilitas tinggi akibat berbagai faktor seperti perang dagang, inflasi, dan ketidakpastian geopolitik. Para investor kini mencari strategi untuk menghadapi fluktuasi harga saham yang sangat dinamis.',
        details: 'Perang dagang yang terjadi antara negara-negara besar dunia menyebabkan kenaikan harga komoditas dan memicu ketidakpastian di pasar saham. Sementara itu, inflasi yang tinggi terus menekan daya beli masyarakat, sehingga banyak perusahaan melakukan penyesuaian harga untuk menjaga margin keuntungan.'
    },
    3: {
        title: 'Berita Olahraga: Timnas Indonesia Raih Kemenangan',
        date: '10 Oktober 2024',
        img: 'https://via.placeholder.com/800x400',
        body: 'Timnas Indonesia kembali menunjukkan performa gemilang dengan meraih kemenangan atas rival kuat di ajang internasional. Kemenangan ini menjadi langkah penting menuju kualifikasi Piala Dunia 2026.',
        details: 'Dengan strategi permainan yang solid dan kerjasama tim yang kuat, Indonesia berhasil mengalahkan lawan dengan skor 2-0. Gol pertama dicetak oleh pemain andalan, sementara gol kedua dihasilkan melalui kerja sama tim yang apik. Para pendukung timnas menyambut kemenangan ini dengan antusias dan berharap untuk kesuksesan lebih lanjut di masa mendatang.'
    }
};

function showFullContent(contentId) {
    const content = contents[contentId];
    const fullContentDetail = document.getElementById('full-content-detail');
    fullContentDetail.innerHTML = `
        <h2 class="full-content-title">${content.title}</h2>
        <div class="content-meta">Tanggal: ${content.date}</div>
        <img class="full-content-image" src="${content.img}" alt="${content.title}">
        <p class="full-content-body">${content.body}</p>
        <p class="full-content-details">${content.details}</p>
    `;
    document.getElementById('full-content-page').classList.add('active');
    document.getElementById('home-page').style.display = 'none';
}


function goBack() {
    document.getElementById('full-content-page').classList.remove('active');
    document.getElementById('home-page').style.display = 'block';
}