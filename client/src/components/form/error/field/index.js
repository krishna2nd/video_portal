import React, { Component } from 'react';

import './index.css';
export class Field extends Component {
  render() {
    return (
      <div className="field-error">
        {this.props.error}
      </div>
    );
  }
}

export default Field;