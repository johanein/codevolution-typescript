import React from "react";

// type CustomButtonsProps = {
//   variant: "primary" | "secondary";
// } & React.ComponentProps<"button">;

// Omit in children prop
type CustomButtonsProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const CustomButtons = ({ variant, children, ...rest }: CustomButtonsProps) => {
  return (
    <button type="button" className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButtons;
