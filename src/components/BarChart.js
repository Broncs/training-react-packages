import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'My Second dataset',
        data: [30, 20, 50, 80, 10],
        borderColor: [
          'rgba(50,180,41,1)',
          'rgba(150,180,41,1)',
          'rgba(250,180,41,1)',
          'rgba(50,280,41,1)',
          'rgba(110,80,131,1)',
        ],
        backgroundColor: [
          'rgba(50,180,41,0.5)',
          'rgba(150,180,41,0.5)',
          'rgba(250,180,41,0.5)',
          'rgba(50,280,41,0.5)',
          'rgba(110,80,131,0.5)',
        ],
        borderWidth: 1,
      },
      {
        label: 'My third dataset',
        data: [80, 10, 30, 50, 40],
        borderColor: 'rgba(0,0,0,1)',
        backgroundColor: [
          'rgba(250,80,41,1)',
          'rgba(250,80,241,1)',
          'rgba(50,0,41,1)',
          'rgba(30,180,50,1)',
          'rgba(150,80,241,1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,

    title: {
      display: true,
      text: 'First Title',
    },
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,

          ticks: {
            min: 0,
            max: 100,
            stepSize: 5,
          },
        },
      ],
    },
  };

  return (
    <div className="wrapper-chart">
      <div className="chart">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
