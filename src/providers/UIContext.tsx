'use client'
import { Actions } from 'ahooks/lib/useToggle';
import React, { useState, ReactNode, useContext } from 'react';
import { useToggle } from 'ahooks';

interface Toggle {
  value: boolean;
  actions: Actions<boolean>;
}
interface Children {
  childrens: ReactNode;
  setChildrens: (data: ReactNode) => void;
}

type UIContextProps = {
  toggleSlideOversCarts: Toggle;
  toggleMenu: Toggle;
  toggleSearch: Toggle;
  toggleSlideOversForm: Toggle;
  toggleSlideOversFormArticle: Toggle;
  childrenDashboard: Children;
};

export const UIContext = React.createContext<UIContextProps>(
  {} as UIContextProps,
);

interface UIProvider {
  children: React.ReactNode;
}

export const UIProvider = ({ children }: UIProvider) => {
  const [valueCarts, actionsCarts] = useToggle();
  const [valueMenu, actionsMenu] = useToggle();
  const [valueSearch, actionsSearch] = useToggle();
  const [valueSlideOversForm, actionsSlideOversForm] = useToggle();
  const [valueSlideOversArticle, actionsSlideOversArticle] = useToggle();
  const [childrens, setChildrens] = useState<ReactNode>();
  return (
    <UIContext.Provider
      value={{
        toggleSlideOversCarts: { value: valueCarts, actions: actionsCarts },
        toggleMenu: { value: valueMenu, actions: actionsMenu },
        toggleSearch: { value: valueSearch, actions: actionsSearch },
        toggleSlideOversForm: { value: valueSlideOversForm, actions: actionsSlideOversForm },
        toggleSlideOversFormArticle: { value: valueSlideOversArticle, actions: actionsSlideOversArticle },
        childrenDashboard: { childrens, setChildrens },
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const {toggleSlideOversCarts, toggleMenu, toggleSearch, toggleSlideOversForm, toggleSlideOversFormArticle, childrenDashboard} = useContext(UIContext)
  return {
    toggleSlideOversCarts, toggleMenu, toggleSearch, toggleSlideOversForm, toggleSlideOversFormArticle, childrenDashboard
  }
}