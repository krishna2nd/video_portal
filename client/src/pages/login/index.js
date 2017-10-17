import React, { Component } from 'react';
import Layout from '../../components/layout';
import User from '../../components/user';
import Auth from '../../lib/user';
import { LoginUser } from  '../../lib/actions/user';

import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super();
    this.userLogin = this.userLogin.bind(this);
  }
  componentWillMount() {
    console.log('Auth test', Auth(this.props.data));
    if (Auth(this.props.data)) {
      this.props.history.push('/list');
    }
  }
  userLogin(user, password) {
    this.props.dispatch(LoginUser(user, password, this.props));
  }
  render() {
    if (Auth(this.props.data)) {
      return null;
    }
    return (
      <Layout >
        <div>
          <User.Login onLogin={this.userLogin} ></User.Login>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  data: state,
});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Login);