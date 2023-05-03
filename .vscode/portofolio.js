// Ketika halaman dimuat sepenuhnya
window.onload = function() {
	// Tambahkan event listener ke semua tautan di menu navigasi
	var links = document.querySelectorAll('nav a');
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function(event) {
			event.preventDefault(); // Jangan jalankan tautan secara langsung
			// Ambil ID bagian yang sesuai dengan tautan yang diklik
			var targetId = this.getAttribute('href');
			// Pindahkan scroll ke bagian yang sesuai
			document.querySelector(targetId).scrollIntoView({
				behavior: 'smooth'
			});
		});
	}
};
