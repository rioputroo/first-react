import React, { useState } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';
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
    showCockpit: true,
    authenticationStatus: false,
  });

  const toggleCockpitDisplay = () => {
    setPersonsState({
      persons: personsState.persons,
      otherState: personsState.otherState,
      showPersons: personsState.showPersons,
      showCockpit: !personsState.showCockpit,
    });
  };

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

  const loginHandler = () => {
    setPersonsState({
      persons: personsState.persons,
      otherState: 'some other value',
      showPersons: true,
      authenticationStatus: true,
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
          isAuthenticated={personsState.authenticationStatus}
        />
      </div>
    );

    style.backgroundColor = 'red';
  }

  return (
    <Auxiliary>
      <button onClick={() => toggleCockpitDisplay}>remove cockpit</button>
      <AuthContext.Provider
        value={{ authenticated: personsState.authenticationStatus, login: loginHandler }}
      >
        {personsState.showCockpit ? (
          <Cockpit
            title={props.appTitle}
            personsState={personsState}
            style={style}
            clicked={togglePersonsHandler}
            login={loginHandler}
          />
        ) : null}
        {persons}
      </AuthContext.Provider>
    </Auxiliary>
  );
}

export default withClass(App, 'App');
