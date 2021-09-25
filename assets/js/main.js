"use strict";

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

/* -------------------------------------------------------------------------- */

/*                                    Utils                                   */

/* -------------------------------------------------------------------------- */
var docReady = function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        setTimeout(fn, 1);
    }
};

var resize = function resize(fn) {
    return window.addEventListener('resize', fn);
};

var isIterableArray = function isIterableArray(array) {
    return Array.isArray(array) && !!array.length;
};

var camelize = function camelize(str) {
    var text = str.replace(/[-_\s.]+(.)?/g, function (_, c) {
        return c ? c.toUpperCase() : '';
    });
    return "".concat(text.substr(0, 1).toLowerCase()).concat(text.substr(1));
};

var getData = function getData(el, data) {
    try {
        return JSON.parse(el.dataset[camelize(data)]);
    } catch (e) {
        return el.dataset[camelize(data)];
    }
};
/* ----------------------------- Colors function ---------------------------- */


var hexToRgb = function hexToRgb(hexValue) {
    var hex;
    hexValue.indexOf('#') === 0 ? hex = hexValue.substring(1) : hex = hexValue; // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")

    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    }));
    return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
};

var rgbaColor = function rgbaColor() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#fff';
    var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
    return "rgba(".concat(hexToRgb(color), ", ").concat(alpha, ")");
};
/* --------------------------------- Colors --------------------------------- */


var colors = {
    primary: '#2c7be5',
    secondary: '#748194',
    success: '#00d27a',
    info: '#27bcfd',
    warning: '#f5803e',
    danger: '#e63757',
    light: '#f9fafd',
    dark: '#000'
};
var grays = {
    white: '#fff',
    100: '#f9fafd',
    200: '#edf2f9',
    300: '#d8e2ef',
    400: '#b6c1d2',
    500: '#9da9bb',
    600: '#748194',
    700: '#5e6e82',
    800: '#4d5969',
    900: '#344050',
    1000: '#232e3c',
    1100: '#0b1727',
    black: '#000'
};

var hasClass = function hasClass(el, className) {
    !el && false;
    return el.classList.value.includes(className);
};

var addClass = function addClass(el, className) {
    el.classList.add(className);
};

var getOffset = function getOffset(el) {
    var rect = el.getBoundingClientRect();
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    };
};

var isScrolledIntoView = function isScrolledIntoView(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        // eslint-disable-next-line no-param-reassign
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return {
        all: top >= window.pageYOffset && left >= window.pageXOffset && top + height <= window.pageYOffset + window.innerHeight && left + width <= window.pageXOffset + window.innerWidth,
        partial: top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset
    };
};

var breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1540
};

var getBreakpoint = function getBreakpoint(el) {
    var classes = el && el.classList.value;
    var breakpoint;

    if (classes) {
        breakpoint = breakpoints[classes.split(' ').filter(function (cls) {
            return cls.includes('navbar-expand-');
        }).pop().split('-').pop()];
    }

    return breakpoint;
};
/* --------------------------------- Cookie --------------------------------- */


var setCookie = function setCookie(name, value, expire) {
    var expires = new Date();
    expires.setTime(expires.getTime() + expire);
    document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(expires.toUTCString());
};

var getCookie = function getCookie(name) {
    var keyValue = document.cookie.match("(^|;) ?".concat(name, "=([^;]*)(;|$)"));
    return keyValue ? keyValue[2] : keyValue;
};

var settings = {
    tinymce: {
        theme: 'oxide'
    },
    chart: {
        borderColor: 'rgba(255, 255, 255, 0.8)'
    }
};
/* -------------------------- Chart Initialization -------------------------- */

var newChart = function newChart(chart, config) {
    var ctx = chart.getContext('2d');
    return new window.Chart(ctx, config);
};
/* ---------------------------------- Store --------------------------------- */


var getItemFromStore = function getItemFromStore(key, defaultValue) {
    var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;

    try {
        return JSON.parse(store.getItem(key)) || defaultValue;
    } catch (_unused) {
        return store.getItem(key) || defaultValue;
    }
};

var setItemToStore = function setItemToStore(key, payload) {
    var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
    return store.setItem(key, payload);
};

var getStoreSpace = function getStoreSpace() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : localStorage;
    return parseFloat((escape(encodeURIComponent(JSON.stringify(store))).length / (1024 * 1024)).toFixed(2));
};

var utils = {
    docReady: docReady,
    resize: resize,
    isIterableArray: isIterableArray,
    camelize: camelize,
    getData: getData,
    hasClass: hasClass,
    addClass: addClass,
    hexToRgb: hexToRgb,
    rgbaColor: rgbaColor,
    colors: colors,
    grays: grays,
    getOffset: getOffset,
    isScrolledIntoView: isScrolledIntoView,
    getBreakpoint: getBreakpoint,
    setCookie: setCookie,
    getCookie: getCookie,
    newChart: newChart,
    settings: settings,
    getItemFromStore: getItemFromStore,
    setItemToStore: setItemToStore,
    getStoreSpace: getStoreSpace
};
/* -------------------------------------------------------------------------- */

/*                                  Detector                                  */

/* -------------------------------------------------------------------------- */

var detectorInit = function detectorInit() {
    var _window = window,
        is = _window.is;
    var html = document.querySelector('html');
    is.opera() && addClass(html, 'opera');
    is.mobile() && addClass(html, 'mobile');
    is.firefox() && addClass(html, 'firefox');
    is.safari() && addClass(html, 'safari');
    is.ios() && addClass(html, 'ios');
    is.iphone() && addClass(html, 'iphone');
    is.ipad() && addClass(html, 'ipad');
    is.ie() && addClass(html, 'ie');
    is.edge() && addClass(html, 'edge');
    is.chrome() && addClass(html, 'chrome');
    is.mac() && addClass(html, 'osx');
    is.windows() && addClass(html, 'windows');
    navigator.userAgent.match('CriOS') && addClass(html, 'chrome');
};
/*-----------------------------------------------
|   Top navigation opacity on scroll
-----------------------------------------------*/


var navbarInit = function navbarInit() {
    var Selector = {
        NAVBAR: '[data-navbar-on-scroll]',
        NAVBAR_COLLAPSE: '.navbar-collapse',
        NAVBAR_TOGGLER: '.navbar-toggler'
    };
    var ClassNames = {
        COLLAPSED: 'collapsed'
    };
    var Events = {
        SCROLL: 'scroll',
        SHOW_BS_COLLAPSE: 'show.bs.collapse',
        HIDE_BS_COLLAPSE: 'hide.bs.collapse',
        HIDDEN_BS_COLLAPSE: 'hidden.bs.collapse'
    };
    var DataKey = {
        NAVBAR_ON_SCROLL: 'navbar-light-on-scroll'
    };
    var navbar = document.querySelector(Selector.NAVBAR); // responsive nav collapsed

    navbar.addEventListener('click', function (e) {
        if (e.target.classList.contains('nav-link') && window.innerWidth < utils.getBreakpoint(navbar)) {
            navbar.querySelector(Selector.NAVBAR_TOGGLER).click();
        }
    });

    if (navbar) {
        var windowHeight = window.innerHeight;
        var html = document.documentElement;
        var navbarCollapse = navbar.querySelector(Selector.NAVBAR_COLLAPSE);

        var allColors = _objectSpread(_objectSpread({}, utils.colors), utils.grays);

        var name = utils.getData(navbar, DataKey.NAVBAR_ON_SCROLL);
        var colorName = Object.keys(allColors).includes(name) ? name : 'white';
        var color = allColors[colorName];
        var bgClassName = "bg-".concat(colorName);
        var shadowName = 'shadow-transition';
        var colorRgb = utils.hexToRgb(color);

        var _window$getComputedSt = window.getComputedStyle(navbar),
            backgroundImage = _window$getComputedSt.backgroundImage;

        var transition = 'background-color 0.35s ease';
        navbar.style.backgroundImage = 'none'; // Change navbar background color on scroll

        window.addEventListener(Events.SCROLL, function () {
            var scrollTop = html.scrollTop;
            var alpha = scrollTop / windowHeight * 0.15; // Add class on scroll

            navbar.classList.add('backdrop');

            if (alpha === 0) {
                navbar.classList.remove('backdrop');
            }

            alpha >= 1 && (alpha = 1);
            navbar.style.backgroundColor = "rgba(".concat(colorRgb[0], ", ").concat(colorRgb[1], ", ").concat(colorRgb[2], ", ").concat(alpha, ")");
            navbar.style.backgroundImage = alpha > 0 || utils.hasClass(navbarCollapse, 'show') ? backgroundImage : 'none';
            alpha > 0 || utils.hasClass(navbarCollapse, 'show') ? navbar.classList.add(shadowName) : navbar.classList.remove(shadowName);
        }); // Toggle bg class on window resize

        utils.resize(function () {
            var breakPoint = utils.getBreakpoint(navbar);

            if (window.innerWidth > breakPoint) {
                navbar.style.backgroundImage = html.scrollTop ? backgroundImage : 'none';
                navbar.style.transition = 'none';
            } else if (!utils.hasClass(navbar.querySelector(Selector.NAVBAR_TOGGLER), ClassNames.COLLAPSED)) {
                navbar.classList.add(bgClassName);
                navbar.classList.add(shadowName);
                navbar.style.backgroundImage = backgroundImage;
            }

            if (window.innerWidth <= breakPoint) {
                navbar.style.transition = utils.hasClass(navbarCollapse, 'show') ? transition : 'none';
            }
        });
        navbarCollapse.addEventListener(Events.SHOW_BS_COLLAPSE, function () {
            navbar.classList.add(bgClassName);
            navbar.classList.add(shadowName);
            navbar.style.backgroundImage = backgroundImage;
            navbar.style.transition = transition;
        });
        navbarCollapse.addEventListener(Events.HIDE_BS_COLLAPSE, function () {
            navbar.classList.remove(bgClassName);
            navbar.classList.remove(shadowName);
            !html.scrollTop && (navbar.style.backgroundImage = 'none');
        });
        navbarCollapse.addEventListener(Events.HIDDEN_BS_COLLAPSE, function () {
            navbar.style.transition = 'none';
        });
    }
};
/* -------------------------------------------------------------------------- */

/*                                Scroll To Top                               */

/* -------------------------------------------------------------------------- */


var scrollToTop = function scrollToTop() {
    document.querySelectorAll('[data-anchor] > a, [data-scroll-to]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var _utils$getData;

            e.preventDefault();
            var el = e.target;
            var id = utils.getData(el, 'scroll-to') || el.getAttribute('href');
            window.scroll({
                top: (_utils$getData = utils.getData(el, 'offset-top')) !== null && _utils$getData !== void 0 ? _utils$getData : utils.getOffset(document.querySelector(id)).top - 100,
                left: 0,
                behavior: 'smooth'
            });
            window.location.hash = id;
        });
    });
}; // /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */


docReady(navbarInit);
docReady(detectorInit);
docReady(scrollToTop);
//# sourceMappingURL=theme.js.map



/* -------------------------------------------------------------------------- */

/*                         Navbar offcanvas on mobile                         */

/* -------------------------------------------------------------------------- */

function darken_screen(yesno) {
    if (yesno == true) {
        document.querySelector('.screen-darken').classList.add('active');
    }
    else if (yesno == false) {
        document.querySelector('.screen-darken').classList.remove('active');
    }
}

function close_offcanvas() {
    darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id) {
    darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[data-trigger]').forEach(function (everyelement) {

        let offcanvas_id = everyelement.getAttribute('data-trigger');

        everyelement.addEventListener('click', function (e) {
            e.preventDefault();
            show_offcanvas(offcanvas_id);

        });
    });

    document.querySelectorAll('.btn-close').forEach(function (everybutton) {

        everybutton.addEventListener('click', function (e) {
            e.preventDefault();
            close_offcanvas();
        });
    });

    document.querySelector('.screen-darken').addEventListener('click', function (event) {
        close_offcanvas();
    });

});
// DOMContentLoaded  end




/* -------------------------------------------------------------------------- */

/*                         Switch dark / light theme                          */

/* -------------------------------------------------------------------------- */




(function () {

    const themeIcon = document.getElementById('themeIcon');
    const iconClass = themeIcon.classList;

    themeIcon.onclick = () => {


        if (iconClass.contains('bi-moon-fill')) {

            iconClass.replace('bi-moon-fill', 'bi-sun');
            document.body.classList.toggle('dark-theme');
        } else {
            iconClass.replace('bi-sun', 'bi-moon-fill');
            document.body.classList.toggle('dark-theme');
        }
    };
})();


(function () {

    const themeIcon = document.getElementById('themeIconPhone');
    const iconClass = themeIcon.classList;

    themeIcon.onclick = () => {


        if (iconClass.contains('bi-moon')) {

            iconClass.replace('bi-moon', 'bi-sun');
            document.body.classList.toggle('dark-theme');
        } else {
            iconClass.replace('bi-sun', 'bi-moon');
            document.body.classList.toggle('dark-theme');
        }
    };
})();

/* -------------------------------------------------------------------------- */

/*                                Switch theme                                */

/* -------------------------------------------------------------------------- */


(function () {

    // DOM Elements

    const creditCardLogo = document.querySelector('.credit-card-logo');
    const firstButton = document.getElementById('first-theme');
    const secondButton = document.getElementById('second-theme');
    const thirdButton = document.getElementById('third-theme');
    const section = document.getElementById('switchSection');
    const sectionClass = section.classList;

    // Button Event Handlers

    secondButton.onclick = () => {

        if (sectionClass.contains('third-theme')) {
            sectionClass.replace('third-theme', 'second-theme');
            creditCardLogo.src = "assets/img/illustrations/visa_r.svg";
            
        } else {
            sectionClass.replace('first-theme', 'second-theme');
            creditCardLogo.src = "assets/img/illustrations/visa_r.svg";
        }
    };

    firstButton.onclick = () => {

        if (sectionClass.contains('second-theme')) {
            sectionClass.replace('second-theme', 'first-theme');
            creditCardLogo.src = "assets/img/illustrations/visa_p.svg";
        } else {
            sectionClass.replace('third-theme', 'first-theme');
            creditCardLogo.src = "assets/img/illustrations/visa_p.svg";
           
        }
    };


    thirdButton.onclick = () => {
        if (sectionClass.contains('second-theme')) {
            sectionClass.replace('second-theme', 'third-theme');
            creditCardLogo.src = "assets/img/illustrations/visa_b.svg";
        } else {
            sectionClass.replace('first-theme', 'third-theme');
            creditCardLogo.src = "assets/img/illustrations/visa_b.svg";
        }
    };

})();



/* -------------------------------------------------------------------------- */

/*                               Pushing Learn                                */

/* -------------------------------------------------------------------------- */


(function() {

    var btn = document.getElementById('btnProgress');
    var bar = document.getElementById('bar');
    var txt = document.getElementById('textProgress');
    var count = 0;
    
    // Listen for an event on the button
    // Increase the width of the bar by 10 percent(10%)
    
    btn.addEventListener('click', () => {
    
        bar.style.width = count + '%';
    
            
        if (count == 10) {
            txt.innerHTML = 'Javascript haladó (pl.: ciklusok, események, tömbök)';
        }
        if (count == 20) {
            txt.innerHTML = 'Javascript középhaladó (pl.: függvények, scope, hoisting)';
        }
        if (count == 30) {
            txt.innerHTML = 'Javascript expert (pl.: this, closures, arrow)';
        }
        if (count == 40) {
            txt.innerHTML = 'Javascript zseni (pl.: metódusok, konstruktor, prototípusok)';
        }
        if (count == 50) {
            txt.innerHTML = 'React bemutatkozó (pl.: ismerkedés, alapk)';
        }
        if (count == 60) {
            txt.innerHTML = 'React kezdő (pl.: függvények, scope, hoisting)';
        }
        if (count == 70) {
            txt.innerHTML = 'React kezdő (pl.: függvények, scope, hoisting)';
        }
        if (count == 80) {
            txt.innerHTML = 'React kezdő (pl.: függvények, scope, hoisting)';
        }
        if (count == 90) {
            txt.innerHTML = 'React kezdő (pl.: függvények, scope, hoisting)';
        }

        if (count == 100) {
    
            btn.innerHTML = "Köszi";
           
    
            // Emoji confetti 
            // https://github.com/loonywizard/js-confetti
    
            const canvas = document.getElementById('custom_canvas')
            const button = document.getElementById('buttonConfetti')
    
            const jsConfetti = new JSConfetti({ canvas })
    
            setTimeout(() => {
                jsConfetti.addConfetti({
                    emojis: ['🦄', '✅', '🪐', '🙈', '🤸🏻‍♂️'],
                    emojiSize: 100,
                    confettiNumber: 50,
                })
            }, 250)
        }
        else {
            count = count + 10;
        }
    });
    count = count + 10;

})(); 






/* -------------------------------------------------------------------------- */

/*                                  Toasts                                    */

/* -------------------------------------------------------------------------- */



$(document).ready(function () {

    $(".show-toast").click(function () {
        $("#myToast").toast({
            delay: 3000
        });
    });

    $(".send-fake-invite").click(function () {
        $("#fakeInviteToast").toast('show');
    });
});

/* -------------------------------------------------------------------------- */

/*                              Cookie Toast                                  */

/* -------------------------------------------------------------------------- */


const cookieToast = () => {

    $("#cookieToast").toast({
        delay: 10000
    });
    $("#cookieToast").toast('show');

}

window.addEventListener("load", cookieToast);



/* -------------------------------------------------------------------------- */

/*                                  Footer                                    */

/* -------------------------------------------------------------------------- */


$(document).ready(function ($) {

    $(window).on('scroll', function () {

        //ADD .TIGHT
        if ($(window).scrollTop() + $(window).height() > $('.tricky-wrapper').outerHeight()) {
            $('body').addClass('tight');
            $('.arrow').hide();
        } else {
            $('body').removeClass('tight');
            $('.arrow').show();
        }
    });

    //BACK TO PRESENTATION MODE
    $("html").on("click", "body.tight .tricky-wrapper", function () {
        $('html, body').animate({
            scrollTop: $('.tricky-wrapper').outerHeight() - $(window).height()
        }, 500);
    });

});

$('.arrow').click(function () {
    $("html").animate({ scrollTop: $('html').prop("scrollHeight") }, 1200);
});








