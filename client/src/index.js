import React from 'react';
import ReactDOM from 'react-dom';
import './css/grid.css';
import App from './App';

import store from './lib/store';
import { Provider } from 'react-redux';
import 'js-cookie';

class Main extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <App />
    </Provider>);
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
