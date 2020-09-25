import * as React from "react";
import cn from "classnames";
import s from "./Button.module.css";

type ButtonProps = {
  isDisabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  type?: "submit";
  size?: "normal" | "small" | "regular";
  theme?: "default" | "white" | "whiteBordered" | "black";
  unbold?: boolean;
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  isDisabled,
  onClick,
  children,
  type,
  size,
  theme = "default",
  unbold,
  fullWidth,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={cn(
        s.button,
        size === "small" && s.sizeSmall,
        size === "regular" && s.sizeRegular,
        theme === "white" && s.themeWhite,
        theme === "black" && s.themeBlack,
        theme === "whiteBordered" && s.themeWhiteBordered,
        unbold && s.unbold,
        fullWidth && s.fullWidth
      )}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
