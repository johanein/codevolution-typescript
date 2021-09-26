import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
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
    </div>
  );
}

export default App;
