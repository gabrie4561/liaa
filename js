const correctPassword = "sayang123";  // Ganti dengan password yang Anda inginkan

function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");

    if (password === correctPassword) {
        showPage("page2");
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Password salah. Coba lagi!";
    }
}

function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        if (page.id === pageId) {
            page.style.display = "block";
        } else {
            page.style.display = "none";
        }
    });
}

function goToPhotos() {
    showPage("page3");
}

// Tampilkan halaman pertama saat pertama kali dibuka
showPage("page1");
