import ReactECharts from "echarts-for-react";

function StockDoughnutChart() {
  const option = {
    tooltip: {
      trigger: "item",
      borderRadius: 5000,
      padding: 50,
      backgroundColor: "white",
      borderColor: "none",
      borderWidth: 0,
    },
    legend: [
      {
        bottom: "0%",
        left: "center",
        selectorLabel: {
          borderRadius: 500000,
          fontSize: 5000,
        },
      },
    ],
    color: ["#277200", "#fdce23", "#fc0101"],
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 50, name: "Production" },
          { value: 20, name: "Store" },
          { value: 30, name: "Stock" },
        ],
      },
    ],
  };

  return <ReactECharts option={option} />;
}

export default StockDoughnutChart;
