alert("This website is still in the development period, proceed with caution!");
button = document.getElementById("top-btn");
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        button.style.display = "block";
    }
    else {
        button.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}