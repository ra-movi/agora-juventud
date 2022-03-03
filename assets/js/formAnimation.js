$(document).ready(function () {
  $(".form-input").click(function () {
    replaceWithValue = $(this).attr("data-funinput-replacetext");

    if ($(this).attr("data-funinput-type") == "date") {
      $(".form-floating.bDate")
        .children("input")
        .attr("placeholder", replaceWithValue);
    } else {
      $(this).children("input").attr("placeholder", replaceWithValue);
    }
    $(this).addClass("active");
    $(this).children("span.top-input-text").addClass("active");
  });

  /* Bootstrap 5 JS included */
  /* vanillajs-datepicker 1.1.4 JS included */
  const getDatePickerTitle = (elem) => {
    // From the label or the aria-label
    const label = elem.nextElementSibling;
    let titleText = "";
    if (label && label.tagName === "LABEL") {
      titleText = label.textContent;
    } else {
      titleText = elem.getAttribute("aria-label") || "";
    }
    return titleText;
  };

  const elems = document.querySelectorAll(".datepicker_input");
  for (const elem of elems) {
    const datepicker = new Datepicker(elem, {
      format: "dd/mm/yyyy", // UK format
      title: getDatePickerTitle(elem),
    });
  }
});
