window.onload = function() {
    var popupText = document.querySelector('.popup-text');
    popupText.style.opacity = '1';
    popupText.style.transform = 'scale(1)';
};



// Fungsi untuk membuka modal dengan animasi pop-up
function openModal(modalId, audioId) {
    var modal = document.getElementById(modalId);
    var audio = document.getElementById(audioId);

    modal.style.display = "block";
    audio.play();

    // Tambahkan kelas animasi untuk pop-up
    modal.classList.add("popup-animation");
}

// Fungsi untuk menutup modal
function closeModal(modalId, audioId) {
    var modal = document.getElementById(modalId);
    var audio = document.getElementById(audioId);

    modal.style.display = "none";
    audio.pause();
    audio.currentTime = 0; // Setel ulang audio ke awal

    // Hapus kelas animasi ketika modal ditutup
    modal.classList.remove("popup-animation");

    // Menghentikan pengguliran halaman ke atas
    event.preventDefault(); 
}

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const popupElements = document.querySelectorAll('.popup-on-scroll');

    function checkVisibility() {
        popupElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                element.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Jalankan fungsi saat halaman dimuat pertama kali
});

