import { PersonProps } from "../person.types";

const Person = (props: PersonProps) => {
  return (
    <li>
      {props.name.first} {props.name.last}
    </li>
  );
};

export default Person;
