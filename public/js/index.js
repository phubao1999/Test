$(document).ready(function() {
  $(".bar").click(function(e) {
    e.preventDefault();
    $(".menulv2").toggleClass("add");
  });
}); // DropDown Menu

$(document).ready(function() {
  $(window).scroll(function() {
    if ($("html,body").scrollTop() > 400) {
      $(".backtotop").addClass("show");
      $(".menutren").addClass("more");
      $(".menulv2").addClass("more-more");
    } else if ($("html, body").scrollTop() <= 100) {
      $(".backtotop").removeClass("show");
      $(".menutren").removeClass("more");
      $(".menulv2").removeClass("more-more");
    }
  });
}); // Scroll Effect

$(document).ready(function() {
  $(".backtotop").click(function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
}); // back to top effect
