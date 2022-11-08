(function($) {
      // Sticky Header 
      $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
            $(".header__sticky").removeClass("sticky");
        } else {
            $(".header__sticky").addClass("sticky");
        }
    });
         // Section Scroll Nav
         $('.menu').onePageNav({
            currentClass: 'scroll_nav',
            changeHash: false,
            scrollSpeed: 100,
            scrollThreshold: 0.1,
            easing: 'swing',
        });
  // Background Image
    $("[data-background]").each(function() {

        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

})(jQuery);