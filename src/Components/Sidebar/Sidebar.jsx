import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook,  faThLarge, faQuestionCircle, faUsers,faFolderOpen,faGraduationCap, faPaintBrush, faTachometerAlt, faLifeRing, faCog, faBell, faTrophy, faLock, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({  activePath, setActivePath }) => {
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    setActivePath(path);
    navigate(path);
  };

  return (
    <div className="min-h-screen w-[200px] bg-[rgb(27, 27, 27)] text-white flex flex-col">
      <div className="flex items-center">
        <h1 className='text-gray-800 dark:text-white font-bold ml-4 mt-8'>SLEARN</h1>
      </div>
      <div className="flex-1 flex flex-col">
        <SidebarItem 
          icon={faHome} 
          label="Home" 
          path="/" 
          active={activePath === '/'} 
          onClick={handleItemClick} 
          disabled={false}
        />
        <SidebarItem 
          icon={faTachometerAlt} 
          label="Dashboard" 
          path="/dashboard" 
          active={activePath === '/dashboard'} 
          onClick={handleItemClick} 
          disabled={false}
        />
        <SidebarItem 
          icon={faBook} 
          label="Courses" 
          path="/courses" 
          active={activePath === '/courses'} 
          onClick={handleItemClick} 
          disabled={false}
        />
        <SidebarItem 
          icon={ faThLarge} 
          label="Modules" 
          path="/module" 
          active={activePath === '/module'} 
          onClick={handleItemClick} 
          disabled={false}
        />
        <SidebarItem 
          icon={faQuestionCircle} 
          label="Quizzes" 
          path="/performance" 
          active={activePath === '/performance'} 
          onClick={handleItemClick} 
          disabled={false}
        />
        <SidebarItem 
          icon={faFolderOpen} 
          label="Resources" 
          path="/resources" 
          active={activePath === '/resources'} 
          onClick={handleItemClick} 
          disabled={false}
        />
        <SidebarItem 
          icon={faUsers} 
          label="Community" 
          path="/community" 
          active={activePath === '/community'} 
          onClick={handleItemClick} 
          disabled={false}
        />
        <SidebarItem 
          icon={faGraduationCap} 
          label="Grades" 
          path="/grades" 
          active={activePath === '/grades'} 
          onClick={handleItemClick} 
          disabled={false}
        />
        <SidebarItem 
          icon={faBell} 
          label="Notifications" 
          path="/notifications" 
          active={activePath === '/notifications'} 
          onClick={handleItemClick} 
          disabled={false}
        />
        <SidebarItem 
          icon={faTrophy} 
          label="Achievements" 
          path="/achievements" 
          active={activePath === '/achievements'} 
          onClick={handleItemClick} 
          disabled={false}
        />
        <Divider />
      </div>
      <SidebarItem 
          icon={faLock} 
          label="Privacy" 
          path="/privacysettings" 
          active={activePath === '/privacysettings'} 
          onClick={handleItemClick} 
          disabled={false}
        />
         <SidebarItem 
          icon={faFileInvoiceDollar} 
          label="Subscription Plans" 
          path="/subscriptionplans" 
          active={activePath === '/subscriptionplans'} 
          onClick={handleItemClick} 
          disabled={false}
        />
      <SidebarItem 
         icon={faLifeRing}
          label="Support" 
          path="/support" 
          active={activePath === '/support'} 
          onClick={handleItemClick} 
          disabled={false}
        />
         <SidebarItem 
          icon={faCog}
          label="Settings" 
          path="/settingspage" 
          active={activePath === '/settingspage'} 
          onClick={handleItemClick} 
          disabled={false}
        />
      <div>
        <img src="./Images/logo.svg" alt="img-logo" className='w-20 h-20 ml-4' />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, path, active, onClick, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick(path);
    }
  };

  return (
    <div 
      className={`flex items-center justify-between px-4 py-2 cursor-pointer ${active ? 'text-orange-400' : 'hover:text-orange-400'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
      onClick={handleClick}
    >
      <div className="flex items-center">
        <FontAwesomeIcon icon={icon} className={`${active ? 'text-orange-400' : 'text-gray-800 dark:text-white'} mr-3`} />
        <span className={`${active ? 'text-orange-400' : 'text-gray-800 dark:text-white'}`}>{label}</span>
      </div>
    
    </div>
  );
};

const Divider = () => (
  <div className="border-t border-orange-400 mx-4 mb-4"></div>
);

export default Sidebar;
















