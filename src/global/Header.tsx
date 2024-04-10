import hamMenu from '@/images/ham-menu.svg';
import sendMail from '@/images/send-mail.svg';
import Link from 'next/link';
interface IHeaderProps {}
const Header = ({}: IHeaderProps): JSX.Element => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="navbar-fixed-top">
              <nav className="header-main-nav">
                <div className="logo">
                  <Link title="home" href="/" className="navbar-brand logo-black">
                    <img
                      src="https://www.cohnreznick.com/-/media/project/cohnreznick-sites/cohnreznick/cohnreznick-site/menu/logo.svg?iar=0&amp;hash=CC181D1DA5E764D1690089586054AFF2"
                      alt="CohnReznick logo"
                      data-variantitemid="{1F11D892-A58A-4B91-884F-1BA9C3A6FB5D}"
                      data-variantfieldname="Logo"
                    />
                  </Link>
                </div>
                <div className="menu-right-control">
                  <div className="search-section">
                    <div className="search-box-dark">
                      <input type="text" name="" id="" placeholder="Enter your search term..." />
                      <button className="search-close"></button>
                      <button className="search-icon-dark"></button>
                    </div>
                  </div>

                  <a href="#" className="header-icon-actions header-mail-dark">
                    <img src={sendMail.src} alt="send" />
                    <div className="floating-hover">Button CTA</div>
                  </a>
                  <a href="#" className="header-icon-actions header-search-dark">
                    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.01312 13.5146C10.3268 13.5146 13.0131 10.8284 13.0131 7.51465C13.0131 4.20094 10.3268 1.51465 7.01312 1.51465C3.69941 1.51465 1.01312 4.20094 1.01312 7.51465C1.01312 10.8284 3.69941 13.5146 7.01312 13.5146Z"
                        stroke="#ffffff"
                      />
                      <path d="M13.2175 15.1465L16.0136 17.9426" stroke="#ffffff" />
                    </svg>
                  </a>

                  <div className="hamburger-menu">
                    <img src={hamMenu.src} alt="hamburger" />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
