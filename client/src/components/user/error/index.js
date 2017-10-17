import React, { Component } from 'react';
import './index.css';

class FieldError extends Component {

  render() {
    if (!this.props.error) {
      return null;
    }
    return (
      <div className="error" >
        <span>{this.props.error}</span>
      </div>
    )
  }
}

export default FieldError;