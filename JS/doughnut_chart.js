const chartData1 = {
    labels: ["Python"],
    data: [78, 22],
  };
  
  const myChart1 = document.querySelector(".my-chart1");
  const ul1 = document.querySelector(".programming-stats .details ul");
  
  new Chart(myChart1, {
    type: "doughnut",
    data: {
      labels: chartData1.labels,
      datasets: [
        {
          backgroundColor: ["blue","lightBlue"],
          data: chartData1.data,
        },
      ],
    },
    options: {
        aspectRatio: 0.8,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }
        },
        responsive: true,
        cutoutPercentage: 90,
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
      // borderWidth: 5,
      cutout: 55,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
const chartData2 = {
    labels: ["Python"],
    data: [95, 5],
  };
  
  const myChart2 = document.querySelector(".my-chart2");
  const ul2 = document.querySelector(".programming-stats .details ul");
  
  new Chart(myChart2, {
    type: "doughnut",
    data: {
      labels: chartData2.labels,
      datasets: [
        {
          backgroundColor: ["blue","lightBlue"],
          data: chartData2.data,
        },
      ],
    },
    options: {
        aspectRatio: 0.8,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }
        },
        responsive: true,
        cutoutPercentage: 90,
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
      // borderWidth: 5,
      cutout: 55,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

const chartData3 = {
    labels: ["Python"],
    data: [59, 41],
};
  
  const myChart3 = document.querySelector(".my-chart3");
  const ul3 = document.querySelector(".programming-stats .details ul");
  
  new Chart(myChart3, {
    type: "doughnut",
    data: {
      labels: chartData3.labels,
      datasets: [
        {
          backgroundColor: ["blue","lightBlue"],
          data: chartData3.data,
        },
      ],
    },
    options: {
        aspectRatio: 0.8,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }
        },
        responsive: true,
        cutoutPercentage: 90,
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
      // borderWidth: 5,
      cutout: 55,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });