import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/login';
import PageVideos from './pages/videos';
import PlayVideo from './pages/play';

// <Login></Login>
// <Route exact path="/login" component={Login} />
// <Route exact path="/logout" component={Login} />
// <Route path="/" component={Login} />

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={PageVideos} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/list" component={PageVideos}/>
            <Route exact path="/play/:id" component={PlayVideo}/>
          </div>
        </Router>
    );
  }
}

const mapStateToProps = state => ({
  data: state,
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(App);
