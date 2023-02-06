/* global jQuery */

/* global window */
(function ($) {
  var COMMON = {
    init: function init() {
      this.cacheDOM();
      $(window).on('resize', this.reCalcOnResize.bind(this));
    },
    cacheDOM: function cacheDOM() {
      this.$body = $('body');
      this.windowWidth = $(window).width();
    },
    reCalcOnResize: function reCalcOnResize() {
      this.windowWidth = $(window).width();
    }
  };
  var mainNavigation = {
    init: function init() {
      this.$mainNavContainer = $('#site-navigation');
      this.$menuToggler = this.$mainNavContainer.find('.menu-toggle');
      this.$mainMenuContainer = this.$mainNavContainer.find('.menu-primary-container');
      this.$mainMenu = this.$mainNavContainer.find('#primary-menu');
      this.$menuToggler.on('click', this.toggleMenu.bind(this));
    },
    toggleMenu: function toggleMenu(e) {
      e.preventDefault();
      this.$mainMenuContainer.toggleClass('shown');
    }
  };
  $(function () {
    COMMON.init();
    mainNavigation.init();
  }); //slick slider init

  $('.slider').slick({
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<i class='fa fa-angle-left arrow-left'></i>",
    nextArrow: "<i class='fa fa-angle-right arrow-right'></i>",
    responsive: [{
      breakpoint: 494,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 394,
      settings: {
        slidesToShow: 1
      }
    }]
  }); //responsive navbar init

  var siteNav = document.querySelector('.site-navigation');
  var menuBtn = document.querySelector('.menu-btn');
  menuBtn.addEventListener('click', function () {
    siteNav.classList.toggle('active');
    menuBtn.classList.toggle('toggle');
  });
})(jQuery);