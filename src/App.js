import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  });

  const nameChangedHandler = (event, index) => {
    personsState.persons[index].name = event.target.value;

    setPersonsState({
      persons: personsState.persons,
      otherState: 'some other value',
      showPersons: true,
    });
  };

  const deletePersonHandler = (personIndex) => {
    personsState.persons.splice(personIndex, 1);

    // updating state immutably by copy the array first
    // const persons = [...personsState.persons];
    // persons.splice(personIndex, 1);

    setPersonsState({
      persons: personsState.persons,
      otherState: 'some other value',
      showPersons: true,
    });
  };

  const togglePersonsHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
      ],
      otherState: 'some other value',
      showPersons: !personsState.showPersons,
    });
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              click={deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key={index}
              changed={(event) => nameChangedHandler(event, index)}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working</p>
      <button style={style} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
}

export default App;
