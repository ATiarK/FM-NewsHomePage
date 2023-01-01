import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import LayoutProps from '../interfaces';
import Header from './Header';

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen w-screen bg-white dark:bg-white text-black dark:text-black py-8 px-8 md:px-16 lg:px-32 gap-4">
      <Header open={open} onClick={() => setOpen(!open)} />
      {open && <Sidebar />}
      {children}
    </div>
  );
}
