$(function () {
  $(".guidance").click(function () {
    $(this).find(".guidance-list").slideToggle();
  });
});

$(function () {
  $(window).scroll(function () {
    $(".fadein").each(function () {
      let tagetElement = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > tagetElement - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});

