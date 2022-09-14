import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full py-8 px-12">
        <Navbar />
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;
