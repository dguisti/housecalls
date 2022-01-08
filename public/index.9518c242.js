function navbarChange() {
    if (window.scrollY > 50) document.getElementById('navbar').classList.add("navbar-scrolled");
    else document.getElementById('navbar').classList.remove("navbar-scrolled");
}
function navbarCollapse() {
    nav.classList.remove("expanded");
}
function navbarExpand() {
    nav.classList.add("expanded");
}
var nav = document.getElementById("navbar");
nav.addEventListener("show.bs.collapse", navbarExpand);
nav.addEventListener("hide.bs.collapse", navbarCollapse);
document.addEventListener("scroll", navbarChange);

//# sourceMappingURL=index.9518c242.js.map
