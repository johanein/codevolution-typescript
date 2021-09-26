import React from "react";

type ContainerStyleProps = {
  styles: React.CSSProperties;
};

const ContainerStyle = (props: ContainerStyleProps) => {
  return <div style={props.styles}></div>;
};

export default ContainerStyle;
