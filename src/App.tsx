import {FC} from 'react';
import { Dashboard } from './components';

const App: FC = () => {
  return (
    <div className="max-w-[1600px] min-h-[1200px] bg-gray_1 m-auto mt-5 xl:max-w-[1279px]">
      <Dashboard />
    </div>
  );
};

export default App;