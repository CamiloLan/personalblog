import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">My Blog</h1>
        <nav>
          <Link href="/" className="mr-4 hover:underline">Home</Link>
          <Link href="/create" className="hover:underline">Create New Post</Link>
        </nav>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
