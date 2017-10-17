import React, { Component } from 'react';
import Layout from '../../components/layout';
import Videos from '../../components/videos';
import GetVideos from  '../../lib/actions/videos';
import Auth from '../../lib/user';
import { connect } from 'react-redux';

class PageVideos extends Component {
  constructor() {
    super();
    this.playVideo = this.playVideo.bind(this);
  }
  componentWillMount() {
    const state = this.props.data;
    if (!Auth(state)) {
      console.log('No auth pusing login..');
      this.props.history.push('/login');
      return;
    }
    this.props.dispatch(GetVideos(state.user.sessionId, state.skip));
  }
  componentDidMount() {
    const self = this;
    const state = this.props.data;
    window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 300)) {
        if (!self.props.data.loading) {
          self.props.dispatch(GetVideos(state.user.sessionId, self.props.data.skip));
        }
      }
    };
  }
  playVideo(id) {
    this.props.history.push(`/play/${id}`);
  }
  render() {
    const state = this.props.data;
    console.log('Thumbs...', (state && state.videos && state.videos.size !== 0) );
    if (!(state && state.videos && state.videos.size !== 0)) {
      return (
        <Layout>
          <p>No videos available...</p>
        </Layout>);
    }
    return (
      <Layout >
        <Videos.ThumbsView
          videos={state.videos}
          playVideo={this.playVideo}
          dispatch={this.props.dispatch}
        />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state,
  }
};
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(PageVideos);