import Footer from '@/global/Footer/Footer';
import Header from '@/global/Header/Header';
import dynamic from 'next/dynamic';
import React from 'react';
const GlobalSearchProvider = dynamic(() => import('@/provider/content/content.provider'), { ssr: false });
interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <GlobalSearchProvider>
        <Header />
        <div id="content" className="container">
          {children}
        </div>
        <Footer />
      </GlobalSearchProvider>
    </>
  );
};

export default Layout;
