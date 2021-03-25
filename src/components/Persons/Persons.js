import React from 'react';
import Person from './Person/Person';

function Persons(props) {
    return (
        props.persons.map((person, index) => {
            return (
              <Person
                click={props.clicked.bind(this, index)}
                name={person.name}
                age={person.age}
                key={index}
                changed={(event) => props.changed(event, index)}
              />
            );
          })
    )
}

export default Persons;