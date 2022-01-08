function navbarChange() : void{
    if (window.scrollY > 50) {
        document.getElementById('navbar').classList.add("navbar-scrolled");
    }
    else {
        document.getElementById('navbar').classList.remove("navbar-scrolled");
    }
}

function navbarCollapse(): void {
    nav.classList.remove("expanded");
}

function navbarExpand(): void {
    nav.classList.add("expanded");
}

var nav:Element = document.getElementById("navbar");

nav.addEventListener("show.bs.collapse", navbarExpand);
nav.addEventListener("hide.bs.collapse", navbarCollapse);

document.addEventListener("scroll", navbarChange);