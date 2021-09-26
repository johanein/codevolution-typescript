import Person from "../Person";
import { Name } from "../person.types";

type PersonListProps = {
  nameList: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <ul>
      {props.nameList.map((name) => (
        <Person key={name.first} name={name} />
      ))}
    </ul>
  );
};

export default PersonList;
