type GreetProps = {
  name: string;
  messageCount?: number; // this is to make this prop optional
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  return (
    <h1>
      {props.isLoggedIn
        ? `Welcom ${props.name} to typescript, the unread message count is{" "}
      ${props.messageCount}`
        : "Welcom guest"}
    </h1>
  );
};

export default Greet;
