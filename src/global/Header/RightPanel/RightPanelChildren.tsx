/* eslint-disable prettier/prettier */
import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line max-lines-per-function
const RightPanelChildern = ({ subChildMenu, hideMenuMobile }: any): JSX.Element => {
  return (
    <>
      {subChildMenu.map((childItem: any, childIndex: number) => (
        <div key={childIndex} className="menu-level3">
          {childItem?.image?.src && <Image alt="image" src={childItem.image.src} width={400} height={400} />}
          <h5 className="headline-menu">
            <span
              className="mobile-back-btn-level2"
              onClick={(ev) => {
                ev.stopPropagation();
                hideMenuMobile(-1);
              }}
            >
              <Image alt="image" src={childItem.backImage.src} width={9} height={15} />
            </span>
            {childItem?.mobileHeading ? childItem?.mobileHeading : childItem?.heading}
          </h5>
          {childItem?.mobileHeading && <h5 className="headline-menu">{childItem.heading}</h5>}
          <p className="description-menu">{childItem.description}</p>

          {childItem.bottomLink.title && <h6>{childItem.bottomLink.title} </h6>}
          {childItem.bottomLink.children.length > 0 &&
            childItem.bottomLink.children.map((t: any, i: number) => (
              <div key={i} className="last-level-menu-item">
                <Link href={t.url}>{t?.label}</Link>
              </div>
            ))}
          {childItem.link.url && (
            <Link className="button-outer button" href={`${childItem.link.url}`}>
              <span className="text-bg">{childItem.link?.label}</span>
              <div className="icon-button">
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.79691 2.0157L6.95931 4.21984L0.844979 4.21984C0.625247 4.21984 0.414502 4.30877 0.259128 4.46714C0.103754 4.62551 0.0164793 4.84035 0.0164793 5.06432C0.0164793 5.28829 0.103754 5.50308 0.259128 5.66145C0.414502 5.81982 0.625247 5.9088 0.844979 5.9088L6.90131 5.9088L4.74721 8.10444C4.65225 8.17703 4.57369 8.26958 4.51687 8.37582C4.46005 8.48205 4.4263 8.59949 4.41789 8.72018C4.40947 8.84086 4.42659 8.96195 4.4681 9.07531C4.50961 9.18866 4.57453 9.29159 4.65846 9.37714C4.74239 9.4627 4.8434 9.5289 4.95461 9.5712C5.06582 9.61351 5.18464 9.63096 5.30305 9.62239C5.42145 9.61381 5.53664 9.57938 5.64086 9.52146C5.74508 9.46355 5.83588 9.38353 5.9071 9.28674L9.42823 5.68923L10.0165 5.09808L9.42823 4.50693L5.94025 0.977C5.78538 0.822268 5.57715 0.735623 5.36029 0.735623C5.14343 0.735623 4.93522 0.822268 4.78035 0.977C4.70911 1.04785 4.65342 1.13331 4.61694 1.22771C4.58047 1.3221 4.56403 1.4233 4.56873 1.52465C4.57343 1.62599 4.59913 1.72514 4.64418 1.81561C4.68922 1.90608 4.75259 1.98582 4.83006 2.04951"
                    fill="#D24700"
                  />
                </svg>
              </div>
            </Link>
          )}
        </div>
      ))}
    </>
  );
};

export default RightPanelChildern;
