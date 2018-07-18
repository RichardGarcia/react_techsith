import React, { Component } from 'react';
import styled from 'styled-components'

import Users from './Components/Users/Users'
import Profiles from './Components/Profiles/Profiles'
import Person from './Components/Person/Person'
import Footer from './Components/Footer/Footer'

import './App.css';



// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>class vs functional components</h2>
        <Users />
        <Profiles />

        <Wrapper>
            <Title>
              Hello World, this is my first styled component!
            </Title>
          </Wrapper>

        <Person />

        <Footer />
      </div>
    );
  }
}

export default App;
