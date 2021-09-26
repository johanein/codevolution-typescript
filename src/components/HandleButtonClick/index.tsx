import React from "react";

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = (props: ButtonProps) => {
  return (
    <button onClick={(e) => props.handleClick(e, 2)} name="alberts button">
      console log
    </button>
  );
};

export default Button;
