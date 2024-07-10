import { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl">Julian Camilo Lancheros Arce</h1>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
