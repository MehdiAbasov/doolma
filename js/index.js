document.addEventListener("DOMContentLoaded", function () {
    const navbarContent =
        `<div class="navbar">
        <div class="logo" >
            <a href="#"><img src="https://www.doolma.com/assets/images/logo/logo14.svg" alt=""></a>
        </div>
        <div class="nav-links">
            <a href="./index.html">Ana Səhifə</a>
            <a href="./generate.html">İcons</a>
            <a href="#"><i class="fa-solid fa-search"></i></a>
            <a href="#">Doolmas</a>
            <a class="sign" href="#">Sign-up</a>
            <a class="sign-in" href="#">Sign in <i class="fa-solid fa-right-to-bracket fa-shake"></i></a>
            <div id="google_translate_element"></div>
        </div>
        </div > `;

    const navbarContainer = document.getElementById("my-navbar");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarContent;
    }
})

let names = {};

function kontrolEt(input) {
    let photoName = input.value;

    if (photoName === "") {
        return;
    }

    let repeatingNumbers = Object.values(names).filter(value => value === photoName).length;

    if (repeatingNumbers > 0) {
        let number = repeatingNumbers;
        input.value = `${photoName}-${number}`;
    }

    names[input.getAttribute('data-index')] = photoName;
}

let inputs = document.querySelectorAll('.photoNameInput');
inputs.forEach(function (input) {
    input.addEventListener('input', function () {
        kontrolEt(this);
    });
});