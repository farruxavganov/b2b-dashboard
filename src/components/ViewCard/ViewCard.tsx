import {FC} from 'react';
import Button from '../Button/Button';

interface ProgressChartProps {}

const ProgressChart: FC<ProgressChartProps> = () => {
  return (
    <div className="flex justify-between items-center w-[514px] h-[140px] bg-white rounded-xl p-8 shadow-[0px_20px_45px_0px_#F0EDF6]">
      <div className="flex flex-col gap-2">
        <span className="text-xl font-bold text-dark_2">Sessions By Device</span>
        <span className="text-sm font-medium text-dark_1">Top Region & Session</span>
      </div>
      <Button title="View" color="text-white" bg="bg-blue_btn" />
    </div>
  );
};

export default ProgressChart;