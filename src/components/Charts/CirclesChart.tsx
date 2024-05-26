import { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import { optionsCircles } from '../../constants';

interface CircleChartProps {
  series: number[];
}

const CircleChart: FC<CircleChartProps> = ({ series }) => {
  return (
    <div className="flex items-center w-[514px] h-[294px] bg-white rounded-xl shadow-[0px_20px_45px_0px_#F0EDF6]">
      <div className="w-2/4">
        <div id="chart">
          <ReactApexChart options={optionsCircles} series={series} type="radialBar" height={184} width={184} />
        </div>
        <div id="html-dist"></div>
      </div>
      <div className="flex flex-col gap-5 w-2/4">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold text-dark_1">Desktop</span>
          <span className="flex items-center gap-1 text-lg font-medium text-dark_2">9.999<span className="text-sm font-medium text-dark_1"> 13%</span></span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold text-dark_1">Desktop</span>
          <span className="flex items-center gap-1 text-lg font-medium text-dark_2">9.999<span className="text-sm font-medium text-dark_1"> 13%</span></span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold text-dark_1">Desktop</span>
          <span className="flex items-center gap-1 text-lg font-medium text-dark_2">9.999<span className="text-sm font-medium text-dark_1"> 13%</span></span>
        </div>
      </div>
    </div>
  );
};

export default CircleChart;
