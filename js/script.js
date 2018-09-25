$(".goLogin").click(function () {
  $('html,body').animate({
    scrollTop: $(".section-login").offset().top
  }, 'slow');
});

$(".goContact").click(function () {
  $('html,body').animate({
    scrollTop: $("#container").offset().top
  }, 'slow');
});