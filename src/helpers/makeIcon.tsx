import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

const makeIcon = (icon: string) => {
  switch (icon) {
    case 'Twitter':
      return (
        <div className="flex items-center p-2 border-2 border-black rounded-md">
          <TwitterOutlined />
        </div>
      );
    case 'Facebook':
      return (
        <div className="flex items-center p-2 border-2 border-black rounded-md">
          <FacebookOutlined />
        </div>
      );
    case 'Instagram':
      return (
        <div className="flex items-center p-2 border-2 border-black rounded-md">
          <InstagramOutlined />
        </div>
      );
    default:
      return null;
  }
};

export default makeIcon;
