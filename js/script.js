document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.dropdown-submenu-button').forEach(function(element){
        element.addEventListener('mouseover', function (e) {
            element.querySelectorAll('.dropdown-submenu').forEach(function (nextEl){
                e.preventDefault();
                if(nextEl.style.display === 'none'){
                    nextEl.style.display = 'block';
                }
            })
        });

        element.addEventListener('mouseout', function (e) {
            element.querySelectorAll('.dropdown-submenu').forEach(function (nextEl){
                e.preventDefault();
                if(nextEl.style.display === 'block'){
                    nextEl.style.display = 'none';
                }
            })
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
// end if innerWidth
});
// DOMContentLoaded  end