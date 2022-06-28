alert("This website is still in the development period, proceed with caution!");
button = document.getElementById("top-btn");
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "box";
    }
    else {
        button.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}