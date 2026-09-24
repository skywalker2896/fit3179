// Vegalite chart loader, used as json files are stored in different directories

const chartConfigs = [
  { id: "chart1", spec: "js/chart1.vl.json" }, // C1 · Calendar heatmap — AO 2022 matches/day
  // { id: "chart2", spec: "js/chart2.vl.json" }, // C2 · ...
  // { id: "chart3", spec: "js/chart3.vl.json" }, // C3 · ...
];
 
chartConfigs.forEach(({ id, spec }) => {
  const target = document.getElementById(id);
  if (!target) {
    console.warn(`No element with id "${id}" found for spec ${spec}`);
    return;
  }
  vegaEmbed(`#${id}`, spec, { actions: false, renderer: "svg" })
    .then(() => {
      target.classList.remove("placeholder-chart");
    })
    .catch(err => {
      console.error(`Failed to render ${id} (${spec}):`, err);
      target.classList.remove("placeholder-chart");
      target.innerHTML = `<span class="chart-error">Couldn't load this chart.</span>`;
    });
});