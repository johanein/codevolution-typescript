import "./App.css";
import Box from "./components/Context/Box";
import FutureValueUserContext from "./components/Context/FutureValueUserContext";
import ThemeContextProvider from "./components/Context/ThemeContext";
import User from "./components/Context/User";
import Greet from "./components/Greet";
import Button from "./components/HandleButtonClick";
import Input from "./components/HandleChangeInput";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import DomRef from "./components/Ref/DomRef";
import MutableRef from "./components/Ref/MutableRef";
import LoggedIn from "./components/State/LoggedIn";
import Counter from "./components/State/UseReducerCounter";
import Status from "./components/Status";
import ContainerStyle from "./components/StyleAsPropsContainer";
import Private from "./components/Class/PassingComponentsAsProps/Private";
import Profile from "./components/Class/PassingComponentsAsProps/Profile";
import List from "./components/Class/GenericProps/List";
import RandomNumber from "./components/Class/Restrictions/RandomNumbers.tsx";
import Toast from "./components/Class/TemplateLiterals/Toast";
import CustomButtons from "./components/Class/WrappingHtml/CustomButton";
import CustomInput from "./components/Class/WrappingHtml/CustomInput";
import Text from "./components/Class/Polymorphic/Text";

function App() {
  const personName = {
    id: 1,
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    {
      id: 1,
      first: "Bruce",
      last: "Wayne",
    },
    {
      id: 2,
      first: "Clark",
      last: "Kent",
    },
  ];
  return (
    <div className="App">
      <Greet name="Albert" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <hr />
      <Heading> Placeholder text</Heading>
      <PersonList nameList={nameList} />
      <Status status="loading" />
      <Oscar>
        <Heading> Oscar goes to decaprio</Heading>
      </Oscar>
      <Button
        handleClick={(e, id) => {
          console.log({ event: e.currentTarget.name, id });
        }}
      />
      <Input
        handleChange={(e) => {
          console.log({ name: e.target.name });
        }}
      />
      <ContainerStyle styles={{ padding: "10px", border: "2px dashed red" }} />
      <LoggedIn />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <FutureValueUserContext>
        <User />
      </FutureValueUserContext>
      <DomRef />
      <MutableRef />
      <Private isLoggedIn Component={Profile} />
      {/* <List
        items={["Superman", "Batman", "Aquaman", "Wondewoman", "Flash"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} /> */}
      <List items={nameList} onClick={(item) => console.log(item)} />
      <RandomNumber isPositive value={10} />
      <Toast position="center" />
      <CustomButtons variant="primary" onClick={() => {}}>
        Customised label
      </CustomButtons>
      <CustomInput onClick={() => {}} />
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
