import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = (props) => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="w-full h-full py-8 px-12 flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <Navbar />
        {props.children}
      </main>
    </div>
  );
};

export default MainLayout;
