import { useContext } from "react";
import { MenuContext } from "../../Context";
import ListMenu from "../../Components/ListMenu";
import "./styles.css";

const MainMenu = () => {
  const context = useContext(MenuContext);

  return (
    <div
      className={`${
        context.isOpenMenu == false
          ? "menu-container menu-container--close"
          : "menu-container"
      }`}
    >
      <ListMenu></ListMenu>
    </div>
  );
};

export default MainMenu;
