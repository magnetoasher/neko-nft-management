import Sidebar from './Sidebar';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-container">{props.children}</div>
    </div>
  );
};

export default MainLayout;
