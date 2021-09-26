type PersonName = {
  name: {
    first: string;
    last: string;
  };
};

const Person = (props: PersonName) => {
  return (
    <li>
      {props.name.first} {props.name.last}
    </li>
  );
};

export default Person;
