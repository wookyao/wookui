import React, { createContext, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menu-item";

type ModeType = "horizontal" | "vertical";
type SelectCallbackType = (selectedIndex: number) => void;

interface MenuProps {
  defaultIndex?: number;
  mode?: ModeType;
  className?: string;
  style?: React.CSSProperties;
  onSelect: SelectCallbackType;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallbackType;
}

export const MenuContext = createContext<IMenuContext>({
  index: 0,
});

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, mode, className, style, onSelect, children } = props;
  const [currentActive, setActive] = useState(defaultIndex);

  const classes = classNames(
    "menu",
    {
      "menu-vertical": mode === "vertical",
    },
    className
  );

  const handlerClick = (index: number) => {
    setActive(index);
    onSelect && onSelect(index);
  };

  const passedContext: IMenuContext = {
    index: currentActive || 0,
    onSelect: handlerClick,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      console.log(displayName, "dis");
      if (displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index,
        });
      } else {
        console.error(
          "Warning: menu has a child with not a MenuItem component"
        );
      }
    });
  };

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

export default Menu;
