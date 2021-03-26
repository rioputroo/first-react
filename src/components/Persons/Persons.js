import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return nextProps.persons !== this.props.persons; 
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={this.props.clicked.bind(this, index)}
          name={person.name}
          age={person.age}
          key={index}
          changed={(event) => this.props.changed(event, index)}
        />
      );
    });
  }
}

export default Persons;
