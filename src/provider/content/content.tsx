import React from 'react';

interface IGlobalSearchProps {
  windowWidth: number;
  isBodyClassToggled: boolean;
  setWindowWidth: (e: any) => void;
  setIsBodyClassToggled: (e: any) => void;
  toggleBodyClass: (e: any) => void;
}

export const GlobalSearchContext = React.createContext<IGlobalSearchProps>({
  windowWidth: 0,
  isBodyClassToggled: false,
  setWindowWidth: () => {},
  setIsBodyClassToggled: () => {},
  toggleBodyClass: () => {},
});

export const useGlobalSearch = () => React.useContext(GlobalSearchContext);
