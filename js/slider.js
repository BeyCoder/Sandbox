var carousel = document.querySelectorAll('.swiper-container');
for(var i = 0; i < carousel.length; i++) {
    var slider1 = carousel[i];
    slider1.classList.add('swiper-container-' + i);
    var controls = document.createElement('div');
    controls.className = "swiper-controls";
    var pagi = document.createElement('div');
    pagi.className = "swiper-pagination";
    var navi = document.createElement('div');
    navi.className = "swiper-navigation";
    var prev = document.createElement('div');
    prev.className = "swiper-button swiper-button-prev";
    var next = document.createElement('div');
    next.className = "swiper-button swiper-button-next";
    slider1.appendChild(controls);
    controls.appendChild(navi);
    navi.appendChild(prev);
    navi.appendChild(next);
    controls.appendChild(pagi);
    var sliderEffect = slider1.getAttribute('data-effect') ? slider1.getAttribute('data-effect') : 'slide';
    var sliderItems = slider1.getAttribute('data-items') ? slider1.getAttribute('data-items') : 3; // items in all devices
    var sliderItemsXs = slider1.getAttribute('data-items-xs') ? slider1.getAttribute('data-items-xs') : 1; // start - 575
    var sliderItemsSm = slider1.getAttribute('data-items-sm') ? slider1.getAttribute('data-items-sm') : Number(sliderItemsXs); // 576 - 767
    var sliderItemsMd = slider1.getAttribute('data-items-md') ? slider1.getAttribute('data-items-md') : Number(sliderItemsSm); // 768 - 991
    var sliderItemsLg = slider1.getAttribute('data-items-lg') ? slider1.getAttribute('data-items-lg') : Number(sliderItemsMd); // 992 - 1199
    var sliderItemsXl = slider1.getAttribute('data-items-xl') ? slider1.getAttribute('data-items-xl') : Number(sliderItemsLg); // 1200 - end
    var sliderItemsXxl = slider1.getAttribute('data-items-xxl') ? slider1.getAttribute('data-items-xxl') : Number(sliderItemsXl); // 1500 - end
    var sliderSpeed = slider1.getAttribute('data-speed') ? slider1.getAttribute('data-speed') : 500;
    var sliderAutoPlay = slider1.getAttribute('data-autoplay') !== 'false';
    var sliderAutoPlayTime = slider1.getAttribute('data-autoplaytime') ? slider1.getAttribute('data-autoplaytime') : 5000;
    var sliderAutoHeight = slider1.getAttribute('data-autoheight') === 'true';
    var sliderMargin = slider1.getAttribute('data-margin') ? slider1.getAttribute('data-margin') : 30;
    var sliderLoop = slider1.getAttribute('data-loop') === 'true';
    var swiper = slider1.querySelector('.swiper:not(.swiper-thumbs)');
    var swiperTh = slider1.querySelector('.swiper-thumbs');
    var sliderTh = new Swiper(swiperTh, {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: false,
        threshold: 2
    });
    if (slider1.getAttribute('data-thumbs') === 'true') {
        var thumbsInit = sliderTh;
        var swiperMain = document.createElement('div');
        swiperMain.className = "swiper-main";
        swiper.parentNode.insertBefore(swiperMain, swiper);
        swiperMain.appendChild(swiper);
        slider1.removeChild(controls);
        swiperMain.appendChild(controls);
    } else {
        var thumbsInit = null;
    }
    var slider = new Swiper(swiper, {
        on: {
            beforeInit: function() {
                if(slider1.getAttribute('data-nav') !== 'true' && slider1.getAttribute('data-dots') !== 'true') {
                    controls.remove();
                }
                if(slider1.getAttribute('data-dots') !== 'true') {
                    pagi.remove();
                }
                if(slider1.getAttribute('data-nav') !== 'true') {
                    navi.remove();
                }
            },
            init: function() {
                if(slider1.getAttribute('data-autoplay') !== 'true') {
                    this.autoplay.stop();
                }
                this.update();
            }
        },
        autoplay: {
            delay: sliderAutoPlayTime,
            disableOnInteraction: false
        },
        speed: sliderSpeed,
        slidesPerView: sliderItems,
        loop: sliderLoop,
        spaceBetween: Number(sliderMargin),
        effect: sliderEffect,
        autoHeight: sliderAutoHeight,
        grabCursor: true,
        resizeObserver: false,
        breakpoints: {
            0: {
                slidesPerView: Number(sliderItemsXs)
            },
            576: {
                slidesPerView: Number(sliderItemsSm)
            },
            768: {
                slidesPerView: Number(sliderItemsMd)
            },
            992: {
                slidesPerView: Number(sliderItemsLg)
            },
            1200: {
                slidesPerView: Number(sliderItemsXl)
            },
            1400: {
                slidesPerView: Number(sliderItemsXxl)
            }
        },
        pagination: {
            el: carousel[i].querySelector('.swiper-pagination'),
            clickable: true
        },
        navigation: {
            prevEl: slider1.querySelector('.swiper-button-prev'),
            nextEl: slider1.querySelector('.swiper-button-next'),
        },
        thumbs: {
            swiper: thumbsInit,
        },
    });
}