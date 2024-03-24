import React, { ReactNode } from 'react';
import Navbar from '../Common/Navbar/Navbar';
import Sidebar from '../Common/Sidebar/Sidebr';

interface MainLayoutProps {
    children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className='h-screen flex bg-white'>
            <Sidebar />
            <div className='flex flex-col w-full mx-4'>
                <Navbar />
                {children}
            </div>
        </div>
    );
}

export default MainLayout;