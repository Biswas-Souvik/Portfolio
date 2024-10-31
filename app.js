const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");

const allSections = document.querySelector(".main-content");


// To switch active-btn class between differnt buttons

function PageTransitions() {
    // Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function (event) {
            let currentBtn = document.querySelectorAll('.active-btn');
            // currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            // this.className += ' active-btn';
            currentBtn[0].classList.remove('active-btn');
            let id = event.target.dataset.id + 'Btn';
            console.log(id);
            const btnToActive = document.getElementById(id);
            console.log(btnToActive)
            btnToActive.classList.add('active-btn');
        })
    }

    // Sections Active class
    allSections.addEventListener("click", (event) => {
        const id = event.target.dataset.id;
        if (id) {
            // Remove selected from the other btns
            // sectBtns.forEach((btn) => {
            //     btn.classList.remove('active-btn');
            // })
            // event.target.classList.add('active-btn');

            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // Toggle theme
    // const themeBtn = document.querySelector('.theme-btn');
    // themeBtn.addEventListener('click', () => {
    //     let element = document.body;
    //     element.classList.toggle('light-mode');
    //     let backgroundColor = getComputedStyle(document.body).getPropertyValue('--color-primary').trim();
    //     console.log(backgroundColor)
    //     //! CHANGING ADDRESS BAR AND STATUS BAR'S COLOR FOR MOBILE DEVICES
    //     document.querySelector('meta[name="theme-color"]').setAttribute('content', backgroundColor);
    // document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute('content', backgroundColor);
    // document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute('content', backgroundColor);
    //     console.log('clicked');
    // })

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

PageTransitions();

// trying

function del() {
    document.getElementById("textarea1").value = '';
}
function clearText() {
    setTimeout(del, 2000);
}

