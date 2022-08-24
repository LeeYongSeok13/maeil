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
            slideChangeTransitionEnd: function () {
                const SS = document.querySelectorAll('.swiper-slide');
                const SSA = document.querySelector('.swiper-slide-active')
                SS.forEach(
                    e => e.classList.remove('on')
                );
                SSA.classList.add('on');
            }
        },
    });

    const Introduce = document.querySelectorAll('.active-event');
    window.addEventListener('scroll', function () {
        let sct = window.scrollY;
        Introduce.forEach(el => {
            if (sct > el.offsetTop - 700) {
                el.classList.add('on')
            }
        })
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

    const MENU = document.querySelector('.tab_menu ul li');
    const TAB = document.querySelector('.tab_content ul');
    MENU.forEach((el, idx) => {
        el.addEventListener('click,', (e) => {
            MENU.forEach(el => el.classList.remove('on'));
            el.classList.add('on');
            TAB.forEach(el => el.classList.remove('on'));
            el.classList.add('on');
        })
    })
})