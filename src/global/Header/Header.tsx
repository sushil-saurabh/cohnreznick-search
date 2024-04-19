/* eslint-disable prettier/prettier */
// eslint-disable-next-line max-lines-per-function

import hamMenu from '@/images/ham-menu.svg';
import sendMail from '@/images/send-mail.svg';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LeftPanel = dynamic(() => import('./LeftPanel'), { ssr: false });

const Header = (): JSX.Element => {
  const [isMegaMenu, setIsMegaMenu] = React.useState(false);
  const updateMegaMenuState = (value: boolean) => {
    setIsMegaMenu(value);
  };
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="navbar-fixed-top">
              <nav className="header-main-nav">
                <div className="logo">
                  <Link title="home" href="/" className="navbar-brand logo-black">
                    <Image
                      src="https://www.cohnreznick.com/-/media/project/cohnreznick-sites/cohnreznick/cohnreznick-site/menu/logo.svg"
                      alt="CohnReznick logo"
                      data-variantitemid="{1F11D892-A58A-4B91-884F-1BA9C3A6FB5D}"
                      data-variantfieldname="Logo"
                      width={250}
                      height={51}
                    />
                  </Link>
                </div>
                <div className="menu-right-control">
                  <div className="search-section">
                    <div className="search-box-dark">
                      <input type="text" name="" id="" placeholder="Enter your search term..." />
                      <button className="search-close" />
                      <button className="search-icon-dark" />
                    </div>
                  </div>

                  <Link href="#" className="header-icon-actions header-mail-dark">
                    <Image src={sendMail.src} alt="send" width={'22'} height={'22'} />
                    <div className="floating-hover">Button CTA</div>
                  </Link>
                  <Link href="#" className="header-icon-actions header-search-dark">
                    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.01312 13.5146C10.3268 13.5146 13.0131 10.8284 13.0131 7.51465C13.0131 4.20094 10.3268 1.51465 7.01312 1.51465C3.69941 1.51465 1.01312 4.20094 1.01312 7.51465C1.01312 10.8284 3.69941 13.5146 7.01312 13.5146Z"
                        stroke="#ffffff"
                      />
                      <path d="M13.2175 15.1465L16.0136 17.9426" stroke="#ffffff" />
                    </svg>
                  </Link>

                  <div className="hamburger-menu" onClick={() => updateMegaMenuState(true)}>
                    <Image src={hamMenu.src} alt="hamburger" fill />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {isMegaMenu && (
          <div className="main-nav-fixed-wrap">
            <LeftPanel updateParentState={updateMegaMenuState} />
          </div>
        )}
      </header>
    </>
  );
};
export default Header;
