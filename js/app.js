let prevScrollpos = window.scrollY;

let headerDiv = document.querySelector("#headerDiv");
let headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;
window.onscroll = function () {
    let currentScrollpos = window.scrollY;
    if(currentScrollpos <= 399) {
        headerDiv.classList.add("d-none");
        headerDiv.classList.remove("fixed-top");
    } else if (prevScrollpos < currentScrollpos) {
        headerDiv.classList.add("d-none");
        headerDiv.classList.remove("fixed-top");
    } else {
        headerDiv.classList.remove("d-none");
        headerDiv.classList.add("fixed-top");
    }
    prevScrollpos = currentScrollpos;
}
