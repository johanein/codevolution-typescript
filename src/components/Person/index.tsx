import { PersonProps } from "../person.types";

const Person = (props: PersonProps) => {
  return (
    <li key={props.name.id}>
      {props.name.first} {props.name.last}
    </li>
  );
};

export default Person;
