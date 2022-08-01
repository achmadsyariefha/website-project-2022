let selectAnchor = 'a[href^="#"]';
let listAnchor = document.querySelectorAll(selectAnchor);

function dropdownMenu() {
    document.getElementById("dropdown").classList.toggle("show");
}

listAnchor.forEach(link => {
    link.onclick = function (e) {
        e.preventDefault();

        let destination = document.querySelector(this.hash);

        destination.scrollIntoView({
            'behavior': 'smooth'
        });
    }
})

window.onclick = function (event) {
    if (!event.target.matches('.subnav')) {
        let dropdowns = document.getElementsByClassName("subnav-content");
        let i;
        for(i=0; i < dropdowns.length; i++){
            let openMenu = dropdowns[i];
            if (openMenu.classList.contains('show')){
                openMenu.classList.remove('show');
            }
        }
    }
}