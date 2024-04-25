import React from 'react';
import { GlobalSearchContext } from './content';

interface IGlobalSearchProps {
  windowWidth: number;
  isBodyClassToggled: boolean;
  setWindowWidth: (e: any) => void;
  setIsBodyClassToggled: (e: any) => void;
  toggleBodyClass: (e: any) => void;
}
interface IGlobalSearchProviderProps {
  children: React.ReactNode;
}

const GlobalSearchProvider = React.memo<IGlobalSearchProviderProps>(
  ({ children }: IGlobalSearchProviderProps): JSX.Element => {
    const [windowWidth, setWindowWidth] = React.useState(0);
    const [isBodyClassToggled, setIsBodyClassToggled] = React.useState(false);
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

    const search = React.useMemo<IGlobalSearchProps>(() => {
      return {
        windowWidth,
        isBodyClassToggled,
        setWindowWidth,
        setIsBodyClassToggled,
        toggleBodyClass,
      };
    }, [windowWidth, isBodyClassToggled, toggleBodyClass, setWindowWidth, setIsBodyClassToggled]);
    return <GlobalSearchContext.Provider value={search}>{children}</GlobalSearchContext.Provider>;
  },
);
export default GlobalSearchProvider;
