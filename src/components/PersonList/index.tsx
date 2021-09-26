import Person from "../Person";

type PersonListProps = {
  nameList: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <ol>
      {props.nameList.map((name) => (
        <Person key={name.first} name={name} />
      ))}
    </ol>
  );
};

export default PersonList;
