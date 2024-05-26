import React from 'react';

interface NavbarButtonProps {
  iconPath: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({
  iconPath,
  active,
  onClick,
}) => {
  return (
    <button
      className={`flex justify-center items-center w-[66px] h-[44px] rounded-2xl ${active ? 'bg-blue_btn shadow-[0px_15px_35px_0px_#563BFF42]' : ''}`}
      onClick={onClick}
    >
      <svg dangerouslySetInnerHTML={{ __html: iconPath }} width="16" height="16" viewBox="0 0 16 16" fill={active ? 'white' : '#C7C7D2'} xmlns="http://www.w3.org/2000/svg"></svg>
    </button>
  );
};

export default NavbarButton;