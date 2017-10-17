import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import AppContent from './AppContent';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header ></Header>
        <AppContent>
          {this.props.children}
        </AppContent>
        <Footer></Footer>
      </div>
    );
  }
}

export default Layout;
