import { ReactNode } from 'react';
type LayoutProps = {
  children?: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen dark:bg-white dark:text-black px-8">
      {children}
    </div>
  );
}
