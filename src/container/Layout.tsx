import { ReactNode } from 'react';
type LayoutProps = {
  children?: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen bg-white dark:bg-white text-black dark:text-black py-8 px-4 md:px-16 lg:px-32 gap-4">
      {children}
    </div>
  );
}
