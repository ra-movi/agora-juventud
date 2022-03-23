$(document).ready(function () {
  const routeElement = $("#route-infographic");
  const cronoElement = $("#crono-infographic");
  const stageNumber = routeElement.attr("data-stage");
  const cronoStageNumber = cronoElement.attr("data-stage");

  let fileMod = "";
  if (screen.width <= 720) {
    fileMod = "-mobile";
  }

  stageSlider(
    routeElement,
    fileMod,
    stageNumber,
    cronoElement,
    cronoStageNumber
  );

  $(window).resize(function () {
    if (screen.width <= 720) {
      fileMod = "-mobile";
    } else {
      fileMod = "";
    }

    stageSlider(
      routeElement,
      fileMod,
      stageNumber,
      cronoElement,
      cronoStageNumber
    );
  });
});

function stageSlider(
  routeElement,
  fileMod,
  stageNumber,
  cronoElement,
  cronoStageNumber
) {
  routeElement.find("img").attr({
    src: `./images/ruta-consulta${fileMod}__stage-${stageNumber}.svg?v=20220223`,
    alt: `Etapa ${stageNumber} del Cronograma de Ágora Jóvenes`,
  });

  cronoElement.find("img").attr({
    src: `./images/cronologia${fileMod}__stage-${cronoStageNumber}.svg?v=20220223`,
    alt: `Etapa ${cronoStageNumber} del proceso de elaboración de la Política Pública de la Juventud`,
  });
}
