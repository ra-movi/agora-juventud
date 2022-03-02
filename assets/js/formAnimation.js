$(document).ready(function () {
  $(".form-input").click(function () {
    replaceWithValue = $(this).attr("data-funinput-replacetext");
    $(this).children("input").attr("placeholder", replaceWithValue);
    $(this).addClass("active");
    $(this).children("span.top-input-text").addClass("active");
  });
});
