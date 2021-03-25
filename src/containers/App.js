import React, { useState } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import './App.css';

function App(props) {
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
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        <Persons
          persons={personsState.persons}
          clicked={deletePersonHandler}
          changed={nameChangedHandler}
        />
      </div>
    );

    style.backgroundColor = 'red';
  }

  return (
    <div className="App">
      <Cockpit title={props.appTitle} personsState={personsState} style={style} clicked={togglePersonsHandler} />
      {persons}
    </div>
  );
}

export default App;
