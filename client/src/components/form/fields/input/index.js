import React, { Component } from 'react';
import Error from '../../error';

import './index.css';

function FieldInput({name, className, placeholder}) {
  return (
    <input
    type="text"
    name={name}
    className={`input ${className ? className : '' }`}
    placeholder={placeholder} 
  />
  )
}
class Input extends Component {
  render() {
    const error = this.props.error;
    return !error ?
      <FieldInput {...this.props} /> :
      (<Error.Field>
        {FieldInput(this.props)}
      </Error.Field>)
  }
}
export default Input;