import { FC } from 'react';
import Menu from "../../assets/7b2b.png";
import Navbar from '../Navbar/Navbar';
import { navigation } from '../../constants';


const SideBar: FC = () => {
  return (
    <div className="w-auto bg-white h-full">
      <div className="flex justify-center w-auto">
        <button className="mt-14 mb-10">
          <img src={Menu} alt="menu" />
        </button>
      </div>
      
      <Navbar navigation={navigation} />
    </div>
  );
};

export default SideBar;
