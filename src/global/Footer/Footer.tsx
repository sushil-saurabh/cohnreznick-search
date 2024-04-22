/* eslint-disable prettier/prettier */
/* eslint-disable max-lines-per-function */

import Image from 'next/image';
import Link from 'next/link';
import { FOOTER_PROPS } from '../Footer/Constant/Footer.Constant';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div id="footer" className="container">
        <div className="row">
          <div className="component footer-top-outer col-12">
            <div className="main-container">
              <div className="footer-top">
                <div className="footer-col">
                  <div className="footer-text-outer">
                    <div className="footer-logo">
                      <Image src={FOOTER_PROPS.footerLogo.src} alt="CohnReznick logo" width={250} height={51} />
                    </div>
                    <div className="footer-text">{FOOTER_PROPS.description}</div>
                  </div>
                </div>
                <div className="footer-col middle">
                  <div className="footer-nav">
                    <ul>
                      {FOOTER_PROPS.mainLink.map((t: any, i: number) => (
                        <li key={i}>
                          <Link href={`${t.url}`}>{t?.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="footer-nav secondary">
                    <ul>
                      {FOOTER_PROPS.secondaryLink.map((t: any, i: number) => (
                        <li key={i}>
                          <Link href={`${t.url}`}>{t?.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="footer-col social">
                  <div className="social-icons">
                    <ul>
                      {FOOTER_PROPS.socialLink.map((t: any, i: number) => (
                        <li key={i}>
                          <Link href={`${t.url}`}>
                            <Image alt="Social Logo" src={`${t.image.src}`} width={38} height={38} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="component content footer-bottom-outer col-12">
            <div className="component-content">
              <div className="footer-bottom">
                <div className="row">
                  <div className="component image file-type-icon-media-link col-12">
                    <div className="component-content">
                      <div className="footer-decondary-logo">
                        <Link href={`${FOOTER_PROPS.secondaryLogo.url}`}>
                          <Image
                            alt="Social Logo"
                            src={`${FOOTER_PROPS.secondaryLogo.image.src}`}
                            width={101}
                            height={38}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="component image file-type-icon-media-link col-12">
                    <div className="component-content">
                      <div className="footer-text">{FOOTER_PROPS.bottomDescription}</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="component image file-type-icon-media-link col-12">
                    <div className="component-content">
                      <div className="footer-text copyright">{FOOTER_PROPS.copyRight}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
