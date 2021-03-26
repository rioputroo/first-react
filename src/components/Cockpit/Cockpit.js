import React, { useEffect, useRef, useContext } from 'react';
import './Cockpit.css';
import AuthContext from '../../context/auth-context';

function Cockpit(props) {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] use effect');
    return () => {
      console.log('[Cockpit.js cleanup work');
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
      <button ref={toggleBtnRef} style={props.style} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Login</button>
    </div>
  );
}

export default Cockpit;
