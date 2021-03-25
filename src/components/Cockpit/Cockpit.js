import React from 'react';
import './Cockpit.css'; 

function Cockpit(props) {
  const classes = [];

  if (props.personsState.persons.length <= 2) {
    classes.push('red');
  }

  if (props.personsState.persons.length <= 1) {
    classes.push('bold');
  }

  return (
    <div>
      <h1>Hi, I'm React App</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <button style={props.style} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
}

export default Cockpit;
