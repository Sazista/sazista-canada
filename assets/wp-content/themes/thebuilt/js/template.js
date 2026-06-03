
/* template.js - Sazista Canada theme functionality */
jQuery(document).ready(function($) {
  // Mobile menu toggle
  $('.mobile-menu-toggle, .menu-toggle').on('click', function() {
    $('nav, .main-navigation, #main-nav').toggleClass('active open');
  });
  
  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function(e) {
    var target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 80 }, 600);
    }
  });
  
  // Sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('header, #header').addClass('sticky');
    } else {
      $('header, #header').removeClass('sticky');
    }
  });

  // Off-canvas menu
  $('.offcanvas-toggle, .nav-toggle').on('click', function() {
    $('body').toggleClass('offcanvas-open');
  });

  // Close offcanvas on outside click
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.offcanvas-menu, .offcanvas-toggle, .nav-toggle').length) {
      $('body').removeClass('offcanvas-open');
    }
  });
});
