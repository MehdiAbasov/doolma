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

function adlariNumarala(adlar) {
    const sayi = {};
    const neticeler = [];

    for (let i = 0; i < adlar.length; i++) {
        const ad = adlar[i];
        if (sayi[ad] === undefined) {
            sayi[ad] = 0;
            neticeler.push(ad)
        } else {
            sayi[ad]++;
            neticeler.push(`${ad} (${sayi[ad]})`);
        }
    }

    return neticeler;
}

