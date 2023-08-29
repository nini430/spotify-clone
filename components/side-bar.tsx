'use client';

import React, { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Box from './box';
import SidebarItem from './sidebar-item';
import Library from './library';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: 'Home',
        href: '/',
        active: pathname !== '/search',
        icon: HiHome,
      },
      {
        label: 'Search',
        href: '/search',
        active: pathname === '/search',
        icon: BiSearch,
      },
    ],
    [pathname]
  );
  return <div className='flex h-full'>
        <div className='hidden md:flex flex-col gap-y-2 h-full w-[300px] bg-black'>
            <Box>
               <div className='flex flex-col gap-y-4 px-5 py-4'>
                {routes.map(route=>(
                    <SidebarItem key={route.label} {...route} />
                ))}
               </div>
            </Box>
            <Box className='overflow-y-auto h-full'>
               <Library/>
            </Box>
        </div>
        <main className='h-full  overflow-y-auto flex-1 py-2'>
        {children}
        </main>
       
  </div>;
};

export default Sidebar;
