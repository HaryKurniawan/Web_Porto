const contents = {
    1: {
        title: 'UI UX ecommerce',
        date: '15 Oktober 2024',
        img: 'https://via.placeholder.com/800x400',
        body: 'Inilah perkembangan teknologi terbaru yang sangat menarik perhatian dunia di tahun 2024. Inovasi di bidang kecerdasan buatan, internet of things (IoT), dan blockchain terus berkembang pesat. Beberapa perusahaan besar telah meluncurkan produk-produk revolusioner yang diprediksi akan mengubah banyak aspek kehidupan manusia.',
        details: 'Kecerdasan buatan kini semakin matang dengan kemampuan yang mendekati otak manusia, IoT membantu menghubungkan perangkat secara lebih efisien, dan blockchain mempercepat adopsi dalam bidang keuangan dan logistik. Semua inovasi ini menghadirkan peluang baru untuk berbagai industri dan membuka jalan bagi masa depan yang lebih terhubung dan pintar.',
        category: 'uiux' // Tambahkan kategori
    },
    2: {
        title: 'Frontend Burung',
        date: '12 Oktober 2024',
        img: 'https://via.placeholder.com/800x400',
        body: 'Pasar keuangan global sedang menghadapi periode volatilitas tinggi akibat berbagai faktor seperti perang dagang, inflasi, dan ketidakpastian geopolitik. Para investor kini mencari strategi untuk menghadapi fluktuasi harga saham yang sangat dinamis.',
        details: 'Perang dagang yang terjadi antara negara-negara besar dunia menyebabkan kenaikan harga komoditas dan memicu ketidakpastian di pasar saham. Sementara itu, inflasi yang tinggi terus menekan daya beli masyarakat, sehingga banyak perusahaan melakukan penyesuaian harga untuk menjaga margin keuntungan.',
        category: 'frontend' // Tambahkan kategori
    },
    3: {
        title: 'Backend LMS',
        date: '10 Oktober 2024',
        img: 'https://via.placeholder.com/800x400',
        body: 'Tim nasional sepak bola Indonesia berhasil meraih kemenangan atas tim lawan dalam pertandingan kualifikasi Piala Dunia 2026. Dengan skor 2-1, para pemain menunjukkan performa yang sangat baik dan berhasil membawa pulang tiga poin.',
        details: 'Pertandingan ini berlangsung di Stadion Gelora Bung Karno dan disaksikan oleh ribuan penonton. Gol kemenangan dicetak oleh penyerang andalan timnas yang berhasil memanfaatkan peluang di menit-menit akhir pertandingan.',
        category: 'other' // Tambahkan kategori
    }
};

function filterContent(category) {
    const contentList = document.getElementById('content-list');
    contentList.innerHTML = '';

    Object.keys(contents).forEach(id => {
        if (category === 'semua' || contents[id].category === category) {
            const contentCard = document.createElement('div');
            contentCard.className = 'content-card';
            contentCard.setAttribute('data-category', contents[id].category);
            contentCard.setAttribute('onclick', `showFullContent(${id})`);

            contentCard.innerHTML = `
                <img src="${contents[id].img}" alt="Berita">
                <h3>${contents[id].title}</h3> <!-- Mengambil title dari contents -->
            `;
            contentList.appendChild(contentCard);
        }
    });
}

function showFullContent(id) {
    const fullContentPage = document.getElementById('full-content-page');
    const fullContentDetail = document.getElementById('full-content-detail');

    fullContentDetail.innerHTML = `
        <h2>${contents[id].title}</h2>
        <p class="content-meta">${contents[id].date}</p>
        <img class="full-content-image" src="${contents[id].img}" alt="${contents[id].title}">
        <p class="full-content-body">${contents[id].body}</p>
        <p class="full-content-details">${contents[id].details}</p>
    `;
    fullContentPage.classList.add('active');
    document.getElementById('home-page').style.display = 'none';
}

function goBack() {
    const fullContentPage = document.getElementById('full-content-page');
    fullContentPage.classList.remove('active');
    document.getElementById('home-page').style.display = 'block';
}

// Panggil filterContent dengan parameter 'semua' saat halaman dimuat
window.onload = () => {
    filterContent('semua');
};
