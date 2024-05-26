import { FC, useState } from 'react';
import NavbarButton from '../NavBarBtn/NavbarBtn';

interface NavbarLink {
  icon: string;
  to: string;
}

interface NavbarProps {
  navigation: {
    links: NavbarLink[];
  };
}

const Navbar: FC<NavbarProps> = ({ navigation }) => {
  const [activePath, setActivePath] = useState('/');

  const handleButtonClick = (path: string) => {
    setActivePath(path);
  };

  return (
    <nav className="mt-12 w-full h-full">
      <ul className="flex flex-col gap-7">
        {navigation.links.map((link, idx) => (
          <li key={idx} className="flex justify-center w-auto relative">
            {activePath === link.to && (
              <span className="w-[3px] h-[35px] bg-blue_btn_ind absolute top-[4.5px] left-0 rounded-r"></span>
            )}
            <NavbarButton
              key={link.to}
              iconPath={link.icon}
              active={activePath === link.to}
              onClick={() => handleButtonClick(link.to)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
