void async function () {
  const data = await fetch('./data.json')
    .then(r => r.json())
  
  window.plot = new uPlot({
    id: "chart1",
    class: "my-chart",
    width: window.innerWidth,
    height: window.innerHeight,
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

const data = [
  [1546300800, 1546387200],    // x-values (timestamps)
  [        35,         71],    // y-values (series 1)
  [        90,         15],    // y-values (series 2)
]
