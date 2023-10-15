document.addEventListener("DOMContentLoaded", function () {
    const navbarContent =
        `<div class="navbar">
        <div class="logo" >
            <a href="#"><img src="https://www.doolma.com/assets/images/logo/logo14.svg" alt=""></a>
        </div>
        <div class="nav-links">
            <a href="./index.html">Ana Səhifə</a>
            <a href="./generate.html">İcons</a>
            <a href="#"><i class="fa-solid fa-search    "></i></a>
            <a href="#">Doolmas</a>
            <div class="nav-btns">
                <a href="#">Sign-up</a>
                <a href="#">Sign in <i class="fa-solid fa-right-to-bracket fa-shake"></i></a>
            </div>
        </div>
        </div > `;

    const navbarContainer = document.getElementById("my-navbar");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarContent;
    }
})

let isimler = {};

function kontrolEt(input) {
    let fotoIsmi = input.value;

    if (fotoIsmi === "") {
        // Eğer input değeri boşsa, işlem yapma
        return;
    }

    // İsimler dizisini dolaşarak aynı ismi ara
    let tekrarSayilari = Object.values(isimler).filter(value => value === fotoIsmi).length;

    if (tekrarSayilari > 0) {
        let numara = tekrarSayilari;
        input.value = `${fotoIsmi}-${numara}`;
    }

    // İsmi isimler dizisine ekle
    isimler[input.getAttribute('data-index')] = fotoIsmi;
}

let inputlar = document.querySelectorAll('.fotoIsmiInput');
inputlar.forEach(function (input) {
    let timeout;
    input.addEventListener('input', function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            kontrolEt(this);
        }, 1000); // 1000 milisaniye (1 saniye) gecikme
    });
});