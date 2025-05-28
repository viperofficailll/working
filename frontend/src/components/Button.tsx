import type { ReactElement } from "react";

export interface ButtonProps {
  varient: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  starticon?: ReactElement;
  endicon?: ReactElement;
  onClick: () => void;
}

const varientStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const sizestyles = {
  sm: "py-1 px-2",
  md: "py-2 pd-4",
  lg: "py-4 px-6" ,
};

const defaultStyles = "rounded-md";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${varientStyles[props.varient]} ${sizestyles[props.size]} ${defaultStyles}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
