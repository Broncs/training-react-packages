import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'My Second dataset',
        data: [30, 20, 50, 80, 10],
        borderColor: 'rgba(50,180,41,0.5)',
        backgroundColor: 'rgba(50,180,41,0.4)',
        pointBorderColor: 'rgba(0,0,0,1)',
        pointBackgroundColor: 'rgba(250,0,0,1)',
        pointHoverRadius: 5,
        pointStyle: 'rectRot',
      },
      {
        label: 'My third dataset',
        data: [80, 10, 30, 50, 40],
        borderColor: 'rgba(250,0,0,0.5)',
        backgroundColor: 'rgba(250,0,0,0.4)',
        pointBorderColor: 'rgba(0,0,0,1)',
        pointBackgroundColor: 'rgba(50,250,50,1)',
        pointHoverRadius: 5,
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
          color: 'blue',
          weight: 10,

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
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
