import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  // Menu - Button Menu
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const openMenu = () => setIsOpenMenu(true);
  const closeMenu = () => setIsOpenMenu(false);

  return (
    <MenuContext.Provider
      value={{
        isOpenMenu,
        setIsOpenMenu,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
