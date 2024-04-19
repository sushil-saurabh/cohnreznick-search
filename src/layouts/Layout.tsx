import Footer from '@/global/Footer';
import Header from '@/global/Header/Header';
import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div id="content" className="container">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
