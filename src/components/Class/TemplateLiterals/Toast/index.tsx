type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "bottom" | "center";

type Position = `${HorizontalPosition}-${VerticalPosition}`;

type ToastProps = {
  position: Exclude<Position, "center-center"> | "center";
};
const Toast = ({ position }: ToastProps) => {
  return <div></div>;
};

export default Toast;
