const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");

const allSections = document.querySelector(".main-content");


// ! TOGGLE THEME
function changeTheme() {
    const checkbox = document.getElementById("checkbox")
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle('light-mode')

        //! CHANGING ADDRESS BAR AND STATUS BAR'S COLOR FOR MOBILE DEVICES
        let backgroundColor = getComputedStyle(document.body).getPropertyValue('--color-primary').trim();
        document.querySelector('meta[name="theme-color"]').setAttribute('content', backgroundColor);
        document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute('content', backgroundColor);
        document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute('content', backgroundColor);
        console.log('clicked');
    })
}
changeTheme();

function del() {
    document.getElementById("textarea1").value = '';
}
function clearText() {
    setTimeout(del, 2000);
}


