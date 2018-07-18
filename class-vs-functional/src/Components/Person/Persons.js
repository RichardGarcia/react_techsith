import React from 'react';

const Persons = (props) => {

  let noAge = props.age ? props.age : 'BLANK';

  if (props.children) {
    return (
      <div>
        <p>From Persons.js - functional component</p>
        <p>Name: {props.children} *** Age: {noAge}</p>
      </div>
    );
  } else {
    return  <div><p> NO Details</p></div>
  }


}

export default Persons;