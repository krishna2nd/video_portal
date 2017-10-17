import React, { Component } from 'react';
import './index.css';
class AppContent extends Component {
  render() {
    return (
      <article>
        <div className="container" >
          {
            this.props.children
          }
        </div>
      </article>
    );
  }
}

export default AppContent;
