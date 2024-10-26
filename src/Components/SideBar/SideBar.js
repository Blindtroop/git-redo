import { FaReddit, FaFacebook, FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';



// Declare SideBarIcon before using it
const SideBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
);

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
        bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaFacebook size="28" />} />
            <SideBarIcon icon={<FaXTwitter size="32" />} />
            <SideBarIcon icon={<FaGoogle size="20" />} />
            <SideBarIcon icon={<FaReddit size="28" />} />
        </div>
    );
};

export default SideBar;
