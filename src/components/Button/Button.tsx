import {FC} from 'react';

interface ButtonProps {
  title: string;
  color: string;
  bg: string;
}

const Button: FC<ButtonProps> = ({ title, color, bg }) => {
  return (
    <button className={`w-[131px] h-[42px] text-sm font-medium rounded-xl ${color} ${bg}`}>
      {title}
    </button>
  );
};

export default Button;