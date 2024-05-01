import React from "react";
import clsx from "clsx";

export type TTypographySize = "XS" | "SM" | "Base";
interface TypographyPropss {
  size: TTypographySize;
  text: string;
  styles: string;
}

const Typography: React.FC<TypographyPropss> = (props) => {
  const { size = "M", text, styles } = props;

  const className = clsx(`text-${size.toLowerCase()}`, "font-medium", styles);

  return <div className={className}>{text}</div>;
};

export default Typography;
