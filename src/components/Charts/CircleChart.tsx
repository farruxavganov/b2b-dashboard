import { FC, useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface CircleChartProps {
  title: string;
  color: string;
  bg: string;
  lc: string;
  series: number[];
  n: string;
  e: string;
}

const CircleChart: FC<CircleChartProps> = ({ title, color, bg, lc, series, n, e }) => {
  const [options, _] = useState<ApexOptions>({
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: -270,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: '70%',
          background: bg,
          position: 'back',
          imageOffsetX: 0,
          imageOffsetY: 0,
        },
        track: {
          background: '#F7F8FB',
          strokeWidth: '98%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 0,
            opacity: 0,
          },
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '10px',
            color: lc,
            offsetY: 4,
          },
          value: {
            show: false,
          },
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
    colors: [color],
    labels: [title],
  });

  return (
    <div className="flex justify-between items-center w-[310px] h-[140px] bg-white rounded-xl p-5 shadow-[0px_20px_45px_0px_#F0EDF6]">
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-medium text-dark_2">{n}</span>
        <span className="text-sm font-bold text-dark_1">Today</span>
      </div>
      <div className="donut">
        <Chart options={options} series={series} type="radialBar" width="125" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-medium text-dark_2">{e}</span>
        <span className="text-sm font-bold text-dark_1">Expacted</span>
      </div>
    </div>
  );
};

export default CircleChart;
