import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = (newName) => {
    // console.log('was clicked');
    // this.state.persons[0].name = 'Maximillian'; DON't DO THIS!!!!
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ]
    })
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 },
      ]
    });
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={() => switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}
          changed={nameChangedHandler}/>
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click={switchNameHandler.bind(this, 'Max!')}
          changed={nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}
          changed={nameChangedHandler}/>
      </div>
    );
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, I'm React App</h1>
//     </div>
//   );
// }

export default App;
