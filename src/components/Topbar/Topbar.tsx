import {FC} from 'react';
import Message from "../../assets/top1.png";
import Notf from "../../assets/top2.png";
import User from "../../assets/top3.png";

interface TopbarProps {}

const Topbar: FC<TopbarProps> = () => {
  return (
    <div className="flex items-center justify-between w-[100%]">
      <nav className="flex items-center justify-between">
        <form className="w-[334px] h-[50px] mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-[14px] h-[14px] text-[#5A5881]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-[#5A5881] font-normal text-sm border-0 rounded-[10px] bg-white" placeholder="Search Anything" required />
          </div>
        </form>
      </nav>

      <ul className="flex gap-6 justify-center items-center">
        <li className="w-[20px] h-[20px] flex justify-center items-center">
          <button className="flex justify-center items-center">
            <img src={Message} alt={Message} />
          </button>
        </li>
        <li className="w-[20px] h-[20px] flex justify-center items-center">
          <button className="flex justify-center items-center">
            <img src={Notf} alt={Notf} />
          </button>
        </li>
        <li className="w-[24px] h-[24px] flex justify-center items-center">
          <button className="flex justify-center items-center">
            <img src={User} alt={User} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;