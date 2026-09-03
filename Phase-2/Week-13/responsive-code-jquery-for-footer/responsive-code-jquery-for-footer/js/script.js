$(document).ready(function () {
  /*
    ==========================================
    APPLE FOOTER MOBILE TOGGLE
    ==========================================
  */

  $(".footer-links-wrapper h3").click(function () {
    /*
      Find the <ul> immediately after
      the clicked <h3>.
    */
    $(this).next("ul").slideToggle(300);

    /*
      Add/remove the "expanded" class
      from the clicked <h3>.
    */
    $(this).toggleClass("expanded");
  });
});
