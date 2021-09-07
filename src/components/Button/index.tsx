import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";
import "./index.scss";

export type BtnTypes =
  | "primary"
  | "info"
  | "success"
  | "danger"
  | "warning"
  | "link"
  | "default";
export type BtnSize = "lg" | "normal" | "sm" | "mini";

interface ButtonBaseProps {
  className?: string;
  btnType: BtnTypes;
  size?: BtnSize;
  color?: string;
  textColor?: string;
  href?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  block?: boolean;
  round?: boolean;
}

type NativeButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLElement>;
type NativeALink = ButtonBaseProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & NativeALink>;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    block,
    round,
    size,
    btnType,
    color,
    textColor,
    href,
    className,
    disabled,
    ...restProps
  } = props;

  const classes = classNames(
    {
      btn: btnType && btnType !== "link",
      [`btn-${btnType}`]: !!btnType && !color,
      [`btn-${size}`]: !!size,
      disabled: btnType === "link" && disabled,
      block: block && btnType !== "link",
      round: round && btnType !== "link",
    },
    className
  );

  const styles = color
    ? {
        backgroundColor: `${color}`,
        color: `${textColor || "#fff"}`,
      }
    : {};

  let linkHref = href;
  if (href?.indexOf("://") === -1) {
    linkHref = `http://${href}`;
  }

  return btnType === "link" && linkHref ? (
    <a className={classes} href={disabled ? "#!" : linkHref} {...restProps}>
      {children}
    </a>
  ) : (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
      style={styles}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "normal",
  btnType: "default",
};

export default Button;
