document.addEventListener("DOMContentLoaded", function(){
    var timeout;

    document.querySelectorAll('.dropdown-submenu-button').forEach(function(element){
        element.addEventListener('mouseover', function (e) {
            clearTimeout(timeout)
            element.querySelectorAll('.dropdown-submenu').forEach(function (nextEl){
                e.preventDefault();
                if(nextEl.style.display === 'none'){
                    nextEl.style.display = 'block';
                }
            })
        });


        const func = (e) => {
            element.querySelectorAll('.dropdown-submenu').forEach(function (nextEl){
                e.preventDefault();
                if(nextEl.style.display === 'block'){
                    nextEl.style.display = 'none';
                }
            })

        }

        element.addEventListener('mouseout', function (e) {
            timeout = setTimeout(func(e), 500);


        });
    })

    document.querySelectorAll('.dropdown-submenu').forEach(function (nextEl){
        nextEl.style.display = 'none';
    })

    const navOffCanvasBtn = document.querySelectorAll(".offcanvas-nav-btn");
    const navOffCanvas = document.querySelector('.navbar:not(.navbar-clone) .offcanvas-nav');
    const bsOffCanvas = new bootstrap.Offcanvas(navOffCanvas, {scroll: true});
    const scrollLink = document.querySelectorAll('.onepage .navbar li a.scroll');
    navOffCanvasBtn.forEach(e => {
        e.addEventListener('click', event => {
            bsOffCanvas.show();
        })
    });
    scrollLink.forEach(e => {
        e.addEventListener('click', event => {
            bsOffCanvas.hide();
        })
    });

    var progressWrap = document.querySelector('.progress-wrap');
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    var offset = 50;
    if (progressWrap != null) {
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        window.addEventListener("scroll", function(event) {
            var scroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
            var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollElementPos >= offset) {
                progressWrap.classList.add("active-progress")
            } else {
                progressWrap.classList.remove("active-progress")
            }
        });
        progressWrap.addEventListener('click', function(e) {
            e.preventDefault();
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
    }

    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 110) {
                $('.navbar-light').addClass("sticky-top slideOut navbar-stick");
            } else {
                $('.navbar-light').removeClass("sticky-top slideOut navbar-stick");
            }
        });
    });
    document.querySelectorAll('.pricing-switchers').forEach(function(element){
        element.addEventListener('click', function (e) {
            var leftElement = true;
            var changed = false;
            document.querySelectorAll('.pricing-switcher').forEach(function(nextEl){
                if($(nextEl).hasClass("pricing-switcher-active")){
                    if(!changed) leftElement = false;
                    $(nextEl).removeClass("pricing-switcher-active")
                }else
                {
                    $(nextEl).addClass("pricing-switcher-active")
                }
                changed = true;

            })
            document.querySelectorAll('.prices').forEach(function (prices){
                prices.querySelectorAll('.price').forEach(function (priceElement){
                    if($(priceElement).hasClass("price-show")){
                        $(priceElement).removeClass("price-show")
                        $(priceElement).addClass("price-hide")
                    }else
                    {
                        $(priceElement).removeClass("price-hide")
                        $(priceElement).addClass("price-show")
                    }
                })

            })
        })
    })
});
