import { FC } from 'react';
import MainLayout from "../MainLayout/MainLayout";
import SideBar from "../SideBar/SideBar";
import Topbar from "../Topbar/Topbar";
import LineChart from "../Charts/LineChart";
import Card from "../Card/Card";
import Icon1 from "../../assets/card1.png";
import Icon2 from "../../assets/card2.png";
import Icon3 from "../../assets/card3.png";
import Icon4 from "../../assets/card4.png";
import CircleChart from "../Charts/CircleChart";
import CirclesChart from "../Charts/CirclesChart";
import ProgressChart from "../Charts/ProgressChart";
import Button from "../Button/Button";
import ViewCard from "../ViewCard/ViewCard";

interface Series {
  name: string;
  data: number[];
}

const series: Series[] = [
  {
    name: "Current Period",
    data: [25, 40, 15, 40, 15, 40, 15, 40, 15, 40, 15, 40]
  },
];

const Dashboard: FC = () => {
  return (
    <div className="max-w-[1356px] bg-gray_2 m-auto rounded-2xl overflow-hidden absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
      <MainLayout sidebar={<SideBar />}>
        <Topbar />
        <div className="flex justify-between mt-8 gap-8">
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-dark_2">Pereformance</h3>
                <span className="text-sm font-bold text-dark_1">Year</span>
              </div>
              <LineChart series={series} />
            </div>
            <div className="flex gap-8">
              <Card title="Users" data={44.3} inc={25} iconBg="bg-cardIcon1" iconPath={Icon1} />
              <Card title="Sessions" data={44.3} inc={10} iconBg="bg-cardIcon2" iconPath={Icon2} />
              <Card title="Bounce Rate" data={44.3} inc={25} iconBg="bg-cardIcon3" iconPath={Icon3} />
              <Card title="Session Durition" data={44.3} inc={25} iconBg="bg-cardIcon4" iconPath={Icon4} />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-dark_2">Daiy Overview</h3>
                <Button title="Export" color="text-dark_2" bg="bg-white" />
              </div>
              <div className="flex justify-between items-center mt-8">
                <CircleChart title='USERS' color='#563BFF' bg='#EFECFF' lc='#563BFF' series={[70]} n="6.555" e="8.555" />
                <CircleChart title='GOALS' color='#FF7049' bg='#FFF3F0' lc='#FF7049' series={[75]} n="7.666" e="9.555" />
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-dark_2">Sessions By Device</h3>
                <span className="text-sm font-bold text-dark_1">Year</span>
              </div>
              <CirclesChart series={[77, 50, 30]} />
            </div>
            <ProgressChart />
            <ViewCard />
          </section>
        </div>
      </MainLayout>
    </div>
  );
};

export default Dashboard;
