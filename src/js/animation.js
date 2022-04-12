$(document).ready(function () {
  scrollWrapper = $(".user-list__content");
  scroll_By = 100;

  let myTimer = setInterval(function () {
    scrollWrapper.animate(
      { scrollLeft: scroll_By },
      {
        duration: 2000,
        easing: "linear",
      }
    );
    scroll_By += 100;
  }, 2000);
});
