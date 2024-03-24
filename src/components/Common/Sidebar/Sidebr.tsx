import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../../assets/images/sidebar/logo.png';
import { sidebarConfig } from '../../../configs/sidebarConfg';

function Sidebar() {
  const location = useLocation();
  let routeConfig = sidebarConfig.slice(0,5)
  let settingConfig = sidebarConfig.slice(6, sidebarConfig.length)
  console.log(settingConfig, 'adfsasdf')
  return (
    <div className='w-20 bg-white px-2 py-4 flex flex-col items-center shadow-2xl border-gray-200'>
      <img src={logo} className='w-8 h-8' alt="log"/>
      <div className='mt-10 flex flex-col items-center'>
        {routeConfig.map((item, index) => (
          <div key={index} className={`text-white w-10 h-10 rounded-md cursor-pointer my-2 ${item.link === location.pathname ? 'bg-[#377dff]' : ''} hover:bg-blue-400`}>
            <img src={item.icon} className="p-1   rounded-md" alt="icon" />
          </div>
        ))}
        <div className='mt-8'>
        {settingConfig.map((item, index) => (
          <div key={index} className={`text-white w-10 h-10 rounded-md cursor-pointer my-2 ${item.link === location.pathname ? 'bg-[#377dff]' : ''} hover:bg-blue-400`}>
            <img src={item.icon} className={`p-1  rounded-md ${item.text ==='setting' ?'ml-1': ''}`} alt="icon" />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;