$(document).ready(function() {
  $(".bar").click(function(e) {
    e.preventDefault();
    $(".menulv2").toggleClass("add");
  });
}); // DropDown Menu

$(document).ready(function() {
  $(window).scroll(function() {
    if ($("html,body").scrollTop() > 94.5) {
      $(".backtotop").addClass("show");
      $(".menulv2").addClass("more-more");
      $("._1").removeClass("fixed-top");
      $("._1").addClass("fix");
    } else if ($("html, body").scrollTop() <= 94.5) {
      $(".backtotop").removeClass("show");
      $(".menulv2").removeClass("more-more");
      $("._1").addClass("fixed-top");
      $("._1").removeClass("fix");
    }
  });
  console.log($(".menulv2").offset().top);
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
