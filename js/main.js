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
        }

    });

})
