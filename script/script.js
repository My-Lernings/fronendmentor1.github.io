let hambergerIcon = document.querySelector('.hamburger_icon');
let sideMenu = document.getElementById('side_menu');
let sideMenuClose = document.getElementById('side_menu_close');
let productImageThumb = document.querySelectorAll('.product_image_tumb_hero');
let productImage = document.getElementById('product_image');
let arrow_right = document.getElementById('arrow_right');
let arrow_left = document.getElementById('arrow_left');
let cart_view = document.getElementById('cart_view_container');
let cart_btn = document.getElementById('cart_btn');
let product_image = document.getElementById('product_image');
let product_expanded_view_img = document.getElementById('product_expanded_view_img');
let product_image_tumb_expanded = document.querySelectorAll('.product_image_tumb_expanded');
let product_expanded_view_container = document.getElementById('product_expanded_view_container');
let product_expanded_view_container_close = document.getElementById('product_expanded_view_container_close');
hambergerIcon.addEventListener('click', function () {
    sideMenu.style.width = '250px';
})
sideMenuClose.addEventListener('click', function () {
    sideMenu.style.width = '0px';
})


productImageThumb.forEach(function (element, index) {

    element.addEventListener('click', function () {
        productImage.src = `./images/image-product-${index + (1)}.jpg`;
    })
})
product_image_tumb_expanded.forEach(function (element, index) {
    element.addEventListener('click', function () {
        product_expanded_view_img.src = `./images/image-product-${index + (1)}.jpg`;
    })
})

arrow_right.addEventListener('click', function () {
    plusDivs(1);
})
arrow_left.addEventListener('click', function () {
    plusDivs(-1);
})

cartIsOpen = false;
cart_btn.addEventListener('click', function () {
    cartIsOpen === false ? cart_view.style.display = 'block' : cart_view.style.display = 'none';
    cartIsOpen = !cartIsOpen;

})

product_image.addEventListener('click', function () {
    product_expanded_view_container.style.display = 'block';
})
product_expanded_view_container_close.addEventListener('click', function () {
    product_expanded_view_container.style.display = 'none';
})











var slideIndex = 1;
showDivs(slideIndex);




function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mobile_slide_img");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}