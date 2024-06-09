document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2:27 PM', '2:27 PM', '2:27 PM', '2:27 PM', '2:27 PM', '2:27 PM', '2:27 PM', '2:28 PM'],
            datasets: [{
                data: [20.355, 20.358, 20.353, 20.354, 20.356, 20.357, 20.355, 20.355],
                backgroundColor: 'rgba(255, 215, 0, 0.1)', // Background color with opacity
                borderColor: '#D4AF37', // Gold color for the line
                borderWidth: 2, // Line width
                pointRadius: 3, // Radius of data points
                pointBackgroundColor: '#D4AF37', // Color of data points
                fill: true, // Fill area under the line
                tension: 0.4 // Line smoothness
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.3)', // Grid color
                    },
                    ticks: {
                        color: '#4F4F4F', // Tick color
                    }
                },
                y: {
                    display: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.3)', // Grid color
                    },
                    ticks: {
                        color: '#4F4F4F', // Tick color
                        beginAtZero: false,
                        min: 20.35,
                        max: 20.36
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.raw;
                        }
                    }
                }
            }
        }
    });
});