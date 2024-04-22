/* eslint-disable prettier/prettier */
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HEADER_LINK } from './Constant/Header.constant';
const RightPanel = dynamic(() => import('./RightPanel/RightPanel'), { ssr: false });

// eslint-disable-next-line max-lines-per-function
const LeftPanel = ({ updateParentState }: any): JSX.Element => {
  const [selectedMenuIndex, setSelectedMenuIndex] = React.useState(0);
  const [childrenMenu, setChildrenMenu] = React.useState(HEADER_LINK.mainLink[0].children);
  const [isRightPanelOpen, setIsRightPanelOpen] = React.useState(false);
  const getMegaMenuItemHandler = React.useCallback(
    (menuIndex: number) => {
      setSelectedMenuIndex((m: number) => (m === menuIndex ? menuIndex : menuIndex));
    },
    [setSelectedMenuIndex],
  );
  const updateMobileSubMenuState = (value: boolean) => {
    setIsRightPanelOpen(value);
  };

  return (
    <>
      <div className="left-panel-nav-wrap">
        <div>
          <div className="navbar-brand-wrap">
            <Link title="home" href="/" className="navbar-brand">
              <Image src={HEADER_LINK.logo.src} alt="CohnReznick logo" width={250} height={51} />
            </Link>
            <div className="action-close-bar-wrap">
              <button
                className="action-close-bar"
                onClick={() => {
                  updateParentState(false);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
                  <path
                    d="M19.5415 19.5416L47.4582 47.4583M19.5415 47.4583L47.4582 19.5416"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <ul className="menu-level1">
            {HEADER_LINK.mainLink.map((t: any, i: number) => (
              <li
                key={i}
                id={`${t?.label}_${i}`}
                className={`navbar-brand ${selectedMenuIndex === i ? 'active' : ''}`}
                onClick={() => {
                  getMegaMenuItemHandler(i);
                  setChildrenMenu(t?.children);
                  updateMobileSubMenuState(true);
                }}
              >
                <Link title={`${t?.label}`} href={`${t?.url}`} target={t?.target} onClick={(ev) => ev.preventDefault()}>
                  {t?.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="login-menu-options">
          {HEADER_LINK.loginLink.map((t: any, i: number) => (
            <li key={i}>
              <Link
                title={`${t.label}`}
                href={`${t.url}`}
                rel="noopener noreferrer"
                target={`${t.target}`}
                className="navbar-brand"
              >
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`right-panel-nav-wrap ${isRightPanelOpen ? 'open' : ''}`}>
        <div className="action-close-bar-wrap">
          <button
            className="action-close-bar"
            onClick={() => {
              updateParentState(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
              <path
                d="M19.5415 19.5416L47.4582 47.4583M19.5415 47.4583L47.4582 19.5416"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <RightPanel childMenu={childrenMenu} updateRightPanel={updateMobileSubMenuState} />
      </div>
    </>
  );
};

export default LeftPanel;
