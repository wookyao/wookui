import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu-wrap";

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, style, className, children } = props;
  const context = useContext(MenuContext);
  const classes = classNames(
    "menu-item",
    {
      "is-disabled": disabled,
      "is-active": context.index === index,
    },
    className
  );

  const handlerClick = () => {
    if (context.onSelect && !disabled && typeof index === "number") {
      context.onSelect(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handlerClick}>
      {children}
    </li>
  );
};

MenuItem.defaultProps = {
  disabled: false,
};
MenuItem.displayName = "MenuItem";

export default MenuItem;
