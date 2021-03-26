import React, { useEffect } from 'react';
import './Cockpit.css';

function Cockpit(props) {
  useEffect(() => {
    console.log('[Cockpit.js] use effect');
    return () => {
        console.log('[Cockpit.js] cleanup work')
    };
  }, []);


  const classes = [];

  if (props.personsState.persons.length <= 2) {
    classes.push('red');
  }

  if (props.personsState.persons.length <= 1) {
    classes.push('bold');
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <button style={props.style} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
}

export default Cockpit;
