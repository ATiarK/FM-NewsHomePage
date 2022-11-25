import { ReactNode } from 'react';
type LayoutProps = {
  children?: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen dark:bg-white dark:text-black py-8 px-32 gap-4">
      {children}
    </div>
  );
}
