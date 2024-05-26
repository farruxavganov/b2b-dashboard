import {FC} from 'react';
import Chart from 'react-apexcharts';
import {options} from "../../constants";

interface Series {
  name: string;
  data: number[];
}

interface LineChartProps {
  series: Series[];
}

const LineChart: FC<LineChartProps> = ({ series }) => (
  <div>
    <div className="w-[654px] h-[294px] chart bg-white rounded-xl shadow-[0px_20px_45px_0px_#F0EDF6]">
      <Chart options={options} series={series} type="line" height={294} width={650} />
    </div>
    <div id="html-dist"></div>
  </div>
);

export default LineChart;