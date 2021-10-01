void async function () {
  const data = await fetch('./data.json')
    .then(r => r.json())
  
  window.plot = new uPlot({
    id: "chart1",
    class: "my-chart",
    width: window.innerWidth,
    height: window.innerHeight - 31,
    series: [
      {},
      {
        spanGaps: false,
        label: "HR",
        stroke: "red",
        width: 1 / devicePixelRatio,
      }
    ],
  }, data, document.body)
}()
