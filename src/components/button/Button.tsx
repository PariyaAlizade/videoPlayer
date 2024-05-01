import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { ReactComponent as LoadingIcon } from "../../icons/loading.svg";
import Typography, { TTypographySize } from "../typography/Typography";

type TSize = "L" | "M" | "S" | "XS";
type TButtonType = "Primary" | "Secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: TButtonType;
  size: TSize;
  iconPosition?: "Left" | "Right";
  loading?: boolean;
  text?: string;
}

const heights: { [key in TSize]: string } = {
  L: "h-14", // 56px
  M: "h-12", // 48px
  S: "h-10", // 40px
  XS: "h-8", // 32px
};

const paddings: { [key in TSize]: string } = {
  L: "py-4", // 8px
  M: "py-3", // 10px
  S: "py-2.5", // 12px
  XS: "py-2", // 16px
};

const textSize: { [key in TSize]: TTypographySize } = {
  L: "Base", 
  M: "Base", 
  S: "SM",
  XS: "XS",
};

const iconSize: { [key in TSize]: string } = {
    L: "w-6", 
    M: "w-5", 
    S: "w-5",
    XS: "w-4",
  };
  

const Button: React.FC<ButtonProps> = (props) => {
  const {
    buttonType = "Primary",
    size = "M",
    iconPosition = "Left",
    loading,
    text,
    ...otherProps
  } = props;

  const className = clsx(
    buttonType === "Primary"
      ? "bg-bg-primary hover:bg-bg-hover active:bg-bg-active disabled:bg-bg-active"
      : "bg-transparent border border-border-primary hover:border-border-hover active:border-border-active disabled:bg-disabled-light",
    paddings[size],
    heights[size],
    iconPosition === "Right" && "flex-row-reverse",
    "rounded-xl",
    "px-4",
    "flex",
    "box-border",
    loading && "gap-2"
  );

  const textClassName =
    buttonType === "Primary" ? "text-white" : "text-text-primary";

  const iconClassName = clsx(buttonType === "Primary" ? "stroke-white" : "stroke-text-primary",iconSize[size], "animate-spin");

  return (
    <button className={className} {...otherProps}>
      {loading && <LoadingIcon className={iconClassName} />}
      {text && (
        <Typography text={text} size={textSize[size]} styles={textClassName} />
      )}
    </button>
  );
};

export default Button;
