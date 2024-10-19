// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
    navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
}


var emojis = $('.ratingicons img');

emojis.on('mouseenter', function () {
    var src = $(this).attr("src").replace('.png', '.gif');
    $(this).attr("src", src);
})
emojis.on('mouseleave', function () {
    var src = $(this).attr("src").replace('.gif', '.png');
    $(this).attr("src", src);
})

emojis.on('click', function () {
    emojis.removeClass('active')
    $(this).addClass('active')
})


$('.cross').on('click', function () {
    $('.animationTrigger').removeClass('popup');
    $('.animationTrigger').addClass('popup-reverse');
    setTimeout(function () {
        $('.animationTrigger').removeClass('popup-reverse');
        $('.animationTrigger').addClass('popup');

    }, 1000)

})
$('#sub').on('click', function () {
    window.location = 'thankyou.html';
})