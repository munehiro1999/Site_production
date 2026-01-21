$(function () {
  $(".guidance").click(function () {
    $(this).find(".guidance-list").slideToggle();
  });
});

$(() => {
  $(window).scroll(() => {
    $(".fadein").each(function () {
      const tagetElement = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > tagetElement - windowHeight + 200) {
        $(this).addClass("scrollin");
      }
    });
  });
});

