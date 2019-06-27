$(window).on("scroll", function() {
  if ($(window).scrollTop() > 707) {
    $(".trikiBasic").addClass("trikiStopped");
    $(".trikiBasic").removeClass("triki");
  } else {
    $(".trikiBasic").addClass("triki");
    $(".trikiBasic").removeClass("trikiStopped");
  }
});
