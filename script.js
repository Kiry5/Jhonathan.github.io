// Função para converter números em letras
function numeroParaPalavra(num) {
    const palavras = [
        "0°C", "5°C", "10°C", "15°C", "20°C", "25°C",
        "30°C", "35°C", "40°C", "45°C", "50°C", "55°C", "60°C",
        "65°C", "70°C", "75°C", "80°C", "85°C",
        "90°C", "95°C", "100°C"
    ];
    return palavras[num] || num.toString(); // Retorna o número como string se não estiver na lista
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['São Paulo', 'Rio de Janeiro', 'Paraná', 'Belo Horizonte', 'Amazonia'],
        datasets: [{
            label: 'Temperatura',
            data: [5, 7, 6, 6, 5], // Números originais
            backgroundColor: [
                'rgba(0, 255, 255, 0.2)', // Vermelho
                'rgba(0, 255, 255, 0.2)', // Azul
                'rgba(0, 255, 255, 0.2)', // Amarelo
                'rgba(0, 255, 255, 0.2)', // Verde-água
                'rgba(0, 255, 255, 0.2)' // Roxo
            ],
            borderColor: [
                'rgba(0, 255, 255, 1)', // Vermelho
                'rgba(0, 255, 255, 1)', // Azul
                'rgba(0, 255, 255, 1)', // Amarelo
                'rgba(0, 255, 255, 1)', // Verde-água
                'rgba(0, 255, 255, 1)' // Roxo
            ],
            borderWidth: 1,
            datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value) => numeroParaPalavra(value), // Converte os números em palavras
                color: '#00FFFF' // Cor vermelha para os rótulos de dados
            }
        }]
    },
    options: {
        plugins: {
            datalabels: {
                display: true,
                color: 'red', // Cor do texto dos rótulos
                font: {
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#00FFFF' // Cor vermelha para os rótulos dos meses
                },
                title: {
                    display: true,
                    text: 'Estados',
                    color: '#00FFFF'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#00FFFF', // Cor vermelha para os rótulos dos números
                    callback: function(value) {
                        return numeroParaPalavra(value); // Substitui os números por palavras
                    }
                },
                title: {
                    display: true,
                    text: 'Temperatura',
                    color: '#00FFFF'
                }
            }
        },
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        elements: {
            bar: {
                borderWidth: 2, // Espessura das bordas das barras
                borderSkipped: 'bottom' // Impede a borda embaixo das barras
            }
        }
    },
    plugins: [ChartDataLabels] // Inclui o plugin
});
