import React from 'react';

export interface IContentProps {
  windowWidth: number;
  isBodyClassToggled: boolean;
  setWindowWidth: (e: any) => void;
  setIsBodyClassToggled: (e: any) => void;
  toggleBodyClass: (e: any) => void;
  isSearchBoxOpen: boolean;
  setIsSearchBoxOpen: (e: any) => void;
}

export const ContentContext = React.createContext<IContentProps>({
  windowWidth: 0,
  isBodyClassToggled: false,
  setWindowWidth: () => {},
  setIsBodyClassToggled: () => {},
  toggleBodyClass: () => {},
  isSearchBoxOpen: false,
  setIsSearchBoxOpen: () => {},
});

export const useContent = () => React.useContext(ContentContext);
