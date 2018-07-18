import React, { Component } from 'react';

import User from './User';

class Users extends Component {
  render() {
    return (
      <div>
        <p>Users class component p</p>
        <User />
      </div>
    )
  }
}

export default Users