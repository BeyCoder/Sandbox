const lightbox = GLightbox({
    selector: '*[data-glightbox]',
    touchNavigation: true,
    loop: false,
    zoomable: false,
    autoplayVideos: true,
    moreLength: 0,
    slideExtraAttributes: {
        poster: ''
    },
    plyr: {
        css: '',
        js: '',
        config: {
            ratio: '16:9',
            fullscreen: {
                enabled: false,
                iosNative: false
            },
            youtube: {
                noCookie: true,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3
            },
            vimeo: {
                byline: false,
                portrait: false,
                title: false,
                transparent: false
            }
        }
    },
});