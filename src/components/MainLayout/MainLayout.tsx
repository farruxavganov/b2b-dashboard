import {FC, ReactNode} from 'react';

interface MainLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children, sidebar }) => {
  return (
    <div className="w-auto flex flex-row">
      <aside className="w-[102px] h-[954px]">{sidebar}</aside>
      <main className="p-8 w-full">{children}</main>
    </div>
  );
};

export default MainLayout;