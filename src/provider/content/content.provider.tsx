import React from 'react';
import type { IContentProps } from './content';
import { ContentContext } from './content';
interface IContentProviderProps {
  children: React.ReactNode;
}

const GlobalSearchProvider = React.memo<IContentProviderProps>(({ children }: IContentProviderProps): JSX.Element => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [isBodyClassToggled, setIsBodyClassToggled] = React.useState(false);
  const [isSearchBoxOpen, setIsSearchBoxOpen] = React.useState(false);
  const toggleBodyClass = React.useCallback(() => {
    setIsBodyClassToggled(!isBodyClassToggled);
    document.getElementById('#filterButtonMobile')?.classList.remove('facetsOpen');
  }, [isBodyClassToggled]);
  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  React.useEffect(() => {
    if (isBodyClassToggled) {
      document.body.classList.add('facetsOpen');
    } else {
      document.body.classList.remove('facetsOpen');
    }
    return () => {
      document.body.classList.remove('facetsOpen');
    };
  }, [isBodyClassToggled]);
  const content = React.useMemo<IContentProps>(() => {
    return {
      windowWidth,
      isBodyClassToggled,
      setWindowWidth,
      setIsBodyClassToggled,
      toggleBodyClass,
      isSearchBoxOpen,
      setIsSearchBoxOpen,
    };
  }, [
    windowWidth,
    isBodyClassToggled,
    toggleBodyClass,
    setWindowWidth,
    setIsBodyClassToggled,
    isSearchBoxOpen,
    setIsSearchBoxOpen,
  ]);
  return (
    <ContentContext.Provider value={content}>
      <div onClick={() => setIsSearchBoxOpen(false)}>{children}</div>
    </ContentContext.Provider>
  );
});
export default GlobalSearchProvider;
