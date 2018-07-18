import React from 'react';

const Persons = (props) => {
  return (
    <div>
      <p>From Persons.js - functional component</p>
      <p>{props.children}</p>
    </div>
  );
}

export default Persons;