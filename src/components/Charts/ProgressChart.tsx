import { FC } from 'react';
import { Progress } from "@material-tailwind/react";

interface ProgressChartProps {
  // no props
}

const ProgressChart: FC<ProgressChartProps> = () => {
  return (
    <div className="flex flex-col w-[514px] h-[274px] bg-white rounded-xl p-8 shadow-[0px_20px_45px_0px_#F0EDF6]">
      <h3 className="text-xl font-bold text-dark_2">Sessions By Device</h3>
      <div className="flex flex-col">
        <div className="flex justify-between text-sm font-bold text-dark_2 mt-4 border-b-2 pb-5">
          <div className="flex gap-4">
            <span>Channel</span>
            <span>Traffic (%)</span>
          </div>
          <span>Value</span>
        </div>
        <div className="flex w-full flex-col gap-4 mt-5">
          <div className="flex items-center gap-7 text-sm font-medium text-dark_1">
            <span>Direct</span>
            <Progress 
              value={70} 
              color="blue" 
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined} 
            />
            <span>70%</span>
          </div>
          <div className="flex items-center gap-7 text-sm font-medium text-dark_1">
            <span>Direct</span>
            <Progress 
              value={80} 
              color="deep-orange" 
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined} 
            />
            <span>80%</span>
          </div>
          <div className="flex items-center gap-7 text-sm font-medium text-dark_1">
            <span>Direct</span>
            <Progress 
              value={30} 
              color="green" 
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined} 
            />
            <span>30%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
