window.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        let sct = window.scrollY;
        sct > 0
            ? this.document.querySelector('.main_menu').classList.add('on')
            : this.document.querySelector('.main_menu').classList.remove('on')
    });

    const MainSlider = new Swiper('.MainSlider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            slideChange: function () {
            }
        }
    });



    let brandBg = document.querySelector('#brand');
    let brandLi01 = document.querySelector('#brand .container ul li:nth-child(1)');
    let brandLi02 = document.querySelector('#brand .container ul li:nth-child(2)');
    let brandLi03 = document.querySelector('#brand .container ul li:nth-child(3)');
    let brandLi04 = document.querySelector('#brand .container ul li:nth-child(4)');
    brandLi01.addEventListener('mouseover', function () {
        brandBg.style.backgroundImage = `url('../img/bg01.jpg')`;
    });

    brandLi02.addEventListener('mouseover', function () {
        brandBg.style.backgroundImage = `url('../img/bg02.jpg')`;
    });

    brandLi03.addEventListener('mouseover', function () {
        brandBg.style.backgroundImage = `url('../img/bg03.jpg')`;
    });

    brandLi04.addEventListener('mouseover', function () {
        brandBg.style.backgroundImage = `url('../img/bg04.jpg')`;
    });

})