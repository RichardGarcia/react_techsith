import React, { Component } from 'react';
import Persons from './Person'

class Person extends Component {
  render(){
    return (
      <div>
        From Person.js (class component)
        <Persons />
      </div>
    )
  }
}

export default Person;