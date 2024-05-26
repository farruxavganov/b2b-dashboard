import React from 'react';

interface CardProps {
  title: string;
  data: number;
  inc: number;
  iconPath: string;
  iconBg: string;
}

const Card: React.FC<CardProps> = ({ title, data, inc, iconPath, iconBg }) => {
  return (
    <div className="flex flex-col w-[140px] h-[200px] rounded-xl bg-white shadow-[0px_20px_45px_0px_#F0EDF6]">
      <div className="relative">
        <div className="relative w-[50px] h-[50px] rounded-xl mt-5 ml-5 truncate">
          <div
            className={`${iconBg} w-[50px] h-[50px] opacity-10 relative z-0`}
          ></div>
          <img src={iconPath} className="absolute z-10 opacity-100 left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4" alt={title} />
        </div>
      </div>
      <div className="flex flex-col ml-5 mt-7 gap-1">
        <h3 className="text-sm font-bold text-dark_1">{title}</h3>
        <span className="text-2xl font-medium font-['Roboto'] text-dark_2">{data}k</span>
        <span className="text-sm font-medium text-dark_1">+{inc}%</span>
      </div>
    </div>
  );
};

export default Card;