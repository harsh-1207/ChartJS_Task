const ctx = document.getElementById('myChart');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [20,'',25,'',30,'',35,'',40,'',60, '', 65],
            datasets: [{
                label: 'Employer: K 73,500',
                data: [20, 24, 28, 32, 36, 40, 44, 48, 58, 65, 75, 85, 95],
                // borderWidth: 1,
                barThickness:20,
                // categoryPercentage: 1,
                
                backgroundColor: [
                    '#0800a3',
                    '#0800a3',
                    '#0800a3',
                    '#0800a3',
                    '#0800a3',
                    '#0800a3',
                    '#0800a3',
                    '#0800a3'
                ]
            },
            {
                label: 'Employee: K 52,500',
                data: [25, 28, 31, 34, 40, 48, 54, 64, 68, 72, 78, 85, 98],
                barThickness:20,
                // borderWidth: 1,
                
                backgroundColor: [
                    '#4935ff',
                    '#4935ff',
                    '#4935ff',
                    '#4935ff',
                    '#4935ff',
                    '#4935ff',
                    '#4935ff',
                    '#4935ff'
                ]
            },
            {
                label: 'Total Interest: K 244,313',
                data: [30, 36, 40, 46, 52, 68, 74, 78, 80, 82, 88, 92, 110],
                barThickness:20,
                // borderWidth: 1,
                
                backgroundColor: [
                    '#85afff',
                    '#85afff',
                    '#85afff',
                    '#85afff',
                    '#85afff',
                    '#85afff',
                    '#85afff',
                    '#85afff'
                ]
            }
            ]
        },
        options: {
            plugins:{
                legend: {
                display: true,
                align: 'center',
                // pointStyle: 'circle',
                // radius: 3,
                labels: {
                    color: 'gray',
                }
            }
            },
            scales: {
                y: {
                    border: {
                        dash: [2,4],
                        display: false
                    },
                    beginAtZero: true,
                    stacked: true,
                    // categoryPercentage: 1.9,
                    min: 0,
                    max: 300,
                    color: 'white',
                    ticks: {
                        callback: function(value, index, ticks) {
                            return '$' + value;
                        },
                        stepSize: 100,
                    }
                },
                x: {
                    grid:{
                        display: false
                    },
                    border:{
                        display: false 
                    },
                    stacked: true
                }
            }
        }
    });