import React, { useState } from "react";
import classNames from "classnames";
import "./index.scss";

export type AlertTypes = "success" | "danger" | "warning" | "info";

interface AlertProps {
  type?: AlertTypes;
  title: string;
  desc?: string;
  showClose?: boolean;
  className?: string;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { type, title, desc, showClose, className } = props;
  const [show, setShow] = useState(true);

  const classes = classNames(
    "alert",
    {
      [`alert-${type}`]: !!type,
      hasclose: showClose,
    },
    className
  );

  const handlerClose = () => {
    setShow(false);
  };

  return show ? (
    <div className={classes}>
      <div className="title">{title}</div>
      {desc ? <div className="desc">{desc}</div> : null}
      {showClose ? <div className="close" onClick={handlerClose}></div> : null}
    </div>
  ) : null;
};

Alert.defaultProps = {
  type: "info",
  showClose: true,
};

export default Alert;
