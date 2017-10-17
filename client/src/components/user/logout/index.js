import React, { Component } from 'react';

class Logout extends Component {
  constructor() {
    super();
    this.logOut = this.logOut.bind(this);
  }
  logOut() {

  }
  render() {
    return (
      <a onClick={this.logOut} >
        Logout
      </a>
    );
  }
}

export default Logout;
