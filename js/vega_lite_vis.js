// Vegalite chart loader, used as json files are stored in different directories

const chartConfigs = [
  { id: "chart1", spec: "js/chart1.vl.json" }, 
  { id: "chart2", spec: "js/chart2.vl.json" },
  { id: "chart3", spec: "js/chart3.vl.json" },
  { id: "chart4", spec: "js/chart4.vg.json" }, 
  { id: "chart5", spec: "js/chart5.vl.json" },
  { id: "chart6", spec: "js/chart6.vl.json" },
  { id: "chart7", spec: "js/chart7.vl.json" },
  { id: "chart8", spec: "js/chart8.vl.json" },
  { id: "chart9", spec: "js/chart9.vl.json" },
  { id: "chart10", spec: "js/chart10.vl.json" },
  { id: "chart11", spec: "js/chart11.vl.json" },
  { id: "chart12", spec: "js/chart12.vl.json" },
  { id: "chart13", spec: "js/chart12.vg.json" }
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