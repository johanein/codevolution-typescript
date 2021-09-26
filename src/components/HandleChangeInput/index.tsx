import React from "react";

type InputProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = (props: InputProps) => {
  return <input onChange={props.handleChange} name="alberts input" />;
};

export default Input;
